// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { config } from "../Misc/Config";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NoticeTip extends cc.Component {

    private move_time = 0

    update(dt) {
        if (this.move_time > config.notice_tip.time) {
            this.reset()
            this.node.active = false
            return
        }
        this.node.y += dt * config.notice_tip.speed
        this.move_time += dt
    }

    reset() {
        this.node.y = 0
        this.move_time = 0
    }
}
