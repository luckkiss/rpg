// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { global_data } from "../Common/GlobalData";
import MyComponent from "../Extend/MyComponent";
import Network from "../Network/Network";
import * as Pb from "../Protobuf/Pb"

const { ccclass, property } = cc._decorator;

@ccclass
export default class SettingCtl extends MyComponent {

    onFirstLoad() {
        // 设置按钮
        var btn: cc.Button = cc.find("Button", this.node).getComponent(cc.Button)
        this.add_btn_event(btn, "onSettingClick")

        // X按钮
        btn = cc.find("Plane/Back", this.node).getComponent(cc.Button)
        this.add_btn_event(btn, "onXClick")

        // 返回选角
        btn = cc.find("Plane/Player", this.node).getComponent(cc.Button)
        this.add_btn_event(btn, "onPlayerClick")

        // 返回登陆
        btn = cc.find("Plane/Account", this.node).getComponent(cc.Button)
        this.add_btn_event(btn, "onAccountClick")
    }

    onSettingClick(event, customData) {
        cc.find("Plane", this.node).active = true
    }

    onXClick(event, customData) {
        cc.find("Plane", this.node).active = false
    }

    onAccountClick(event, customData) {
        Network.send(Pb.gateway_c_exit_account.create({}))
    }

    onPlayerClick(event, customData) {
        Network.send(Pb.gateway_c_exit_role.create({}))
    }

    private add_btn_event(btn: cc.Button, handler: string) {
        var clickEvent = new cc.Component.EventHandler()
        clickEvent.component = "SettingCtl"
        clickEvent.handler = handler
        clickEvent.target = this.node
        btn.clickEvents.push(clickEvent)
    }
}
