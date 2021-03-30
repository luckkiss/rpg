// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import * as Pb from "../Protobuf/Pb"
import MyComponent from "../Extend/MyComponent";
import Network from "../Network/Network";
import NetworkCtl from "../Network/NetworkCtl";
import UnitCtl from "../Unit/UnitCtl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ControlCtl extends MyComponent {
    private myUnit: cc.Node
    private isDirectionClick = false

    @property(cc.Node)
    move: cc.Node = null

    private oldACos = 0
    private lastSend = 0

    onFirstLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onDirectionClick, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.onDirectionClick, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onDirectionMove, this)
        // 普攻技能1技能2-012
        var btn
        var children = cc.find("Skill", this.node).children
        for (var i = 0; i < children.length; i++) {
            btn = children[i].getComponent(cc.Button)
            this.add_btn_event(btn, "onSkillClick", (i).toString())
        }
    }

    update(dt) {
        if (this.myUnit && this.isDirectionClick) {
            var now = new Date().getTime()
            var newPos = this.move.position
            this.move.setPosition(newPos.x, newPos.y)
            var sqrtNew = Math.sqrt(newPos.x * newPos.x + newPos.y * newPos.y)
            var acos = Math.acos(newPos.x / sqrtNew)
            // 大于100毫秒 或 旋转大于10度
            if (now - this.lastSend > 100 || Math.abs(acos - this.oldACos) > 3.14 / 36) {
                console.log(acos, newPos.y)
                Network.send(Pb.battle_c_move_start.create({ face: Math.round(((newPos.y > 0 ? 0 : 3.14 / 2) + acos) * 1000) }))
                this.lastSend = now
                this.oldACos = acos
            }
        }
    }

    onDirectionClick(event: cc.Event.EventTouch, customData: string) {
        if (event.getLocationX() > 960 / 2 && !this.isDirectionClick) {
            return
        }
        if (event.type == cc.Node.EventType.TOUCH_START) {
            this.isDirectionClick = true
            this.onDirectionMove(event, customData)
        } else if (this.isDirectionClick) {
            this.isDirectionClick = false
            this.move.setPosition(0, 0)
            this.myUnit.getComponent(UnitCtl).idle()
            Network.send(Pb.battle_c_move_end.create({}))
        }
    }

    onDirectionMove(event: cc.Event.EventTouch, customData: string) {
        if (!this.isDirectionClick) {
            return
        }
        var newPos = this.move.parent.convertToNodeSpaceAR(new cc.Vec2(event.getLocationX(), event.getLocationY()))
        this.move.setPosition(newPos.x, newPos.y)
    }

    onSkillClick(event: cc.Event, customData: string) {
        event.stopPropagation()
        if (this.myUnit && this.myUnit.getComponent(UnitCtl).state != "attack") {
            Network.send(Pb.battle_c_skill.create({ skillId: 0, hitList: this.calcHitList() }))
        }
    }

    calcHitList(): [] {
        return []
    }

    private add_btn_event(btn: cc.Button, handler: string, customData: string) {
        var clickEvent = new cc.Component.EventHandler()
        clickEvent.component = "ControlCtl"
        clickEvent.handler = handler
        clickEvent.target = this.node
        clickEvent.customEventData = customData
        btn.clickEvents.push(clickEvent)
    }

    setMyUnit(unit: cc.Node) {
        this.myUnit = unit
    }
}
