// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

import * as Pb from "../Protobuf/Pb"
import Network from "../Network/Network"
import { global_data } from "../Common/GlobalData";
import {EventCtl, ListenItem} from "../Common/EventCtl";
import MainCanvasCtl from "../Canvas/MainCanvasCtl";
import MyComponent from "../Extend/MyComponent";

@ccclass
export default class LoginCtl extends MyComponent {

    public account: cc.Label = null// 账号
    public loginBtn: cc.Button = null// 登录按钮

    onFirstLoad() {
        this.account = cc.find("AccountEditBox/TEXT_LABEL", this.node).getComponent(cc.Label)
        this.loginBtn = cc.find("LoginButton", this.node).getComponent(cc.Button)
        var clickEvnt = new cc.Component.EventHandler()
        clickEvnt.target = this.node
        clickEvnt.component = "LoginCtl"
        clickEvnt.handler = "onLoginClick"
        this.loginBtn.clickEvents.push(clickEvnt)
    }

    registerEvent(): ListenItem[] {
        return [
            { event: "gateway_s_login", fun: this.gateway_s_login, target: this }
        ]
    }

    // 点击登录回调
    public onLoginClick(event) {
        var accountStr = this.account.string
        if (accountStr && accountStr != "") {
            Network.send(Pb.gateway_c_login.create({ account: accountStr }))
        }
    }

    // 登录成功回调
    public gateway_s_login(msg: Pb.gateway_s_login) {
        global_data.account = msg.account
        global_data.roleList = msg.roleList
        cc.find("Canvas").getComponent(MainCanvasCtl).showCreate()
    }
}
