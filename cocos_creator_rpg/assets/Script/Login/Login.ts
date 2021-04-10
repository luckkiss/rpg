// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import * as pb from "../Protobuf/Pb"
import Network from "../Network/Network";
import NoticeTipManager from "../NoticeTip/NoticeTipManager";
import { EventManager } from "../Event/EventManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Login extends cc.Component {

    onLoad() {
        EventManager.register({ event: "gateway_s_login", fun: this.gateway_s_login, target: this.node })
    }

    public onLoginClick(event: cc.Event, customEventData) {
        if (event.type != cc.Node.EventType.TOUCH_END) return
        var str = cc.find("EditBox", this.node).getComponent(cc.EditBox).string
        if (str && str != "") {
            var msg = pb.gateway_c_login.create({ account: str })
            Network.send(msg);
        } else {
            NoticeTipManager.notice("请输入账号")
        }
    }

    gateway_s_login(msg: pb.gateway_s_login) {
        console.log(msg.account, " login success")
    }
}
