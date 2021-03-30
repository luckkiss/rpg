// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { global_data } from "../Common/GlobalData";
import MyComponent from "../Extend/MyComponent";

export interface UnitInfo { id: number, name: string, career: number, x: number, y: number, face: number }

const { ccclass, property } = cc._decorator;

@ccclass
export default class UnitCtl extends MyComponent {

    @property(cc.Node)
    mode: cc.Node = null

    private speed = 50
    private face = 0
    private attackTime = 0
    public state = "idle"

    setInfo(uintInfo: UnitInfo) {
        const playerId = uintInfo.id
        const playerName = uintInfo.name
        const career = uintInfo.career
        var name = cc.find("Name", this.node)
        name.getComponent(cc.Label).string = playerName
        // 自己的话名字显示红色
        if (playerId == global_data.playerId) {
            name.color = new cc.Color(255, 0, 0)
        }

        // 设置动画
        this.setAnimation(career)

        // 坐标
        this.node.x = uintInfo.x
        this.node.y = uintInfo.y

        // 朝向
        this.face = uintInfo.face
    }

    setAnimation(carerr: number) {
        const self = this;
        const clipNameArray = ["idle", "hit", "run", "attack"]
        for (let i = 0; i < clipNameArray.length; i++) {
            const tag = clipNameArray[i]
            cc.resources.load("Clip/" + tag + "00" + carerr, function (err, clip: cc.AnimationClip) {
                const animation: cc.Animation = self.mode.getComponent(cc.Animation)
                clip.name = tag
                animation.addClip(clip, tag)
                if (tag == "idle") animation.play(tag)
            })
        }
    }

    update(dt) {
        // 移动
        if (this.state == 'run') {
            this.node.setPosition(this.node.x + this.speed * dt * Math.cos(this.face), this.node.y + this.speed * dt * Math.sin(this.face))
            var animation: cc.Animation = this.mode.getComponent(cc.Animation)
            if (this.mode.scaleX * (3.14 / 2 - Math.abs(this.face)) < 0) {
                this.mode.scaleX = this.mode.scaleX * -1
            }
        }

        // 攻击
        this.attackTime = this.attackTime - dt
        if (this.state == 'attack' && this.attackTime < 0) this.state = 'idle'

        // 动画
        var animation: cc.Animation = this.mode.getComponent(cc.Animation)
        if (animation.currentClip && animation.currentClip.name != this.state) {
            animation.play(this.state)
        }

        // 防止动画变形
        const sprite: cc.Sprite = this.mode.getComponent(cc.Sprite)
        const size = sprite.spriteFrame.getOriginalSize()
        this.mode.width = size.width
        this.mode.height = size.height
    }

    attack(skillId: number) {
        if (this.state == "attack") return
        var animationState: cc.AnimationState = this.mode.getComponent(cc.Animation).getAnimationState("attack")
        if (animationState) {
            this.state = "attack"
            this.attackTime = animationState.duration
        }
    }

    hit(hurt: number) {
        console.log(hurt)
    }

    move(face: number) {
        this.state = "run"
        this.face = face
    }

    idle(face?: number, x?: number, y?: number) {
        this.state = "idle"
        if (face) this.face = face
        if (x && y) this.node.setPosition(x, y)
    }

}
