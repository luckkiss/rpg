// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import MainCanvasCtl from "../Canvas/MainCanvasCtl";
import { EventCtl, ListenItem } from "../Common/EventCtl";
import { global_data } from "../Common/GlobalData";
import MyComponent from "../Extend/MyComponent";
import Network from "../Network/Network";
import * as Pb from "../Protobuf/Pb"
import TipCtl from "../Tip/TipCtl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CreateCtl extends MyComponent {

    private canvas: MainCanvasCtl// 画布

    private backBtn: cc.Button// 返回按钮
    private createItemArray: cc.Node[] = []

    onFirstLoad() {
        this.canvas = cc.find("Canvas").getComponent(MainCanvasCtl)
        // 返回按钮
        this.backBtn = cc.find("BackButton", this.node).getComponent(cc.Button)
        var clickEvnt = new cc.Component.EventHandler()
        clickEvnt.target = this.node
        clickEvnt.component = "CreateCtl"
        clickEvnt.handler = "onBackClick"
        this.backBtn.clickEvents.push(clickEvnt)
        // 创角框框
        cc.resources.load("Prefab/CreateItem", (err, prefab: cc.Prefab) => {
            const startX = -960 / 2 + 150
            var createItem: cc.Node
            var createBtn: cc.Button
            var clickEvnt: cc.Component.EventHandler
            // 先初始化全部框框
            for (var i = 0; i < 3; i++) {
                createItem = cc.instantiate(prefab)
                this.node.addChild(createItem)
                createItem.setPosition(startX + i * 300, createItem.y)
                createBtn = cc.find("Button", createItem).getComponent(cc.Button)
                this.createItemArray.push(createItem)
                clickEvnt = new cc.Component.EventHandler()
                clickEvnt.target = this.node
                clickEvnt.component = "CreateCtl"
                clickEvnt.handler = "onCreateClick"
                clickEvnt.customEventData = (i).toString()
                createBtn.clickEvents.push(clickEvnt)
            }
            this.updateCreateItm()
        })
    }

    registerEvent(): ListenItem[] {
        return [
            { event: "gateway_s_create_role", fun: this.gateway_s_create_role, target: this },
            { event: "gateway_s_select_role", fun: this.gateway_s_select_role, target: this },
        ]
    }

    onLoadAgain() {
        this.updateCreateItm()
    }

    // 刷新玩家信息
    public updateCreateItm() {
        // 未初始化完
        if (this.createItemArray.length < 3) return
        const roleList = global_data.roleList
        if (!roleList) return
        var role: Pb.gateway_p_role_info
        var createItem: cc.Node
        for (var i = 0; i < roleList.length; i++) {
            createItem = this.createItemArray[i]
            role = roleList[i]
            cc.find("Button/Background/Label", createItem).getComponent(cc.Label).string = "选择角色"
            cc.find("NameEditBox", createItem).active = false
            var nameLabel = cc.find("NameLabel", createItem)
            nameLabel.active = true
            nameLabel.getComponent(cc.Label).string = role.name
            var toggle = cc.find("ToggleContainer", createItem)
            if (role.career == 1) toggle.children[0].getComponent(cc.Toggle).check()
            else if (role.career == 2) toggle.children[1].getComponent(cc.Toggle).check()
            else if (role.career == 3) toggle.children[2].getComponent(cc.Toggle).check()
        }
    }

    // 点击返回回调
    public onBackClick(event) {
        this.canvas.showLogin()
    }

    // 点击创角按钮
    public onCreateClick(event, customData: string) {
        var index = parseInt(customData)
        if (global_data.roleList.length <= index) {
            // 创角
            var createItem = this.createItemArray[index]
            var name = cc.find("NameEditBox/TEXT_LABEL", createItem).getComponent(cc.Label).string
            if (name == "") {
                TipCtl.show("名字不能为空")
                return
            }
            var toggleItems = cc.find("ToggleContainer", createItem).getComponent(cc.ToggleContainer).toggleItems
            for (var i = 0; i < toggleItems.length; i++) {
                if (toggleItems[i].isChecked) {
                    const msg = Pb.gateway_c_create_role.create({ name: name, career: (i + 1) })
                    Network.send(msg)
                    break
                }
            }
        } else {
            // 选角
            var role: Pb.gateway_p_role_info = global_data.roleList[index]
            const msg = Pb.gateway_c_select_role.create({ id: role.id })
            Network.send(msg)
        }
    }

    public gateway_s_create_role(msg: Pb.gateway_s_create_role) {
        global_data.roleList = msg.roleList
        this.updateCreateItm()
    }

    public gateway_s_select_role(msg: Pb.gateway_s_select_role) {
        global_data.playerId = msg.id
        // 跳场景
        cc.director.loadScene("battle")
    }
}
