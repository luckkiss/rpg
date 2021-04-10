// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Login from "../Login/Login";
import { config } from "../Misc/Config";
import Util from "../Misc/Util";
import NoticeTipManager from "../NoticeTip/NoticeTipManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainCanvas extends cc.Component {

    onLoad(){
        // 先加一堆层级空节点
        var layer: cc.Node
        var layerList = []
        for (const key in config.layer) {
            layerList.push(config.layer[key])
        }
        layerList.sort()
        for (let i = 0; i < layerList.length; i++) {
            layer = new cc.Node("Layer" + i)
            layer.setParent(this.node)
        }
        // notice tip
        NoticeTipManager.init()
        // 加个背景
        var sprite = new cc.Node("SPrite")
        sprite.addComponent(cc.Sprite)
        sprite.setParent(Util.get_layer(config.layer.bg))
        Util.addSeqLoad("Textrue/background", cc.SpriteFrame, (error: Error, spriteFrame: cc.SpriteFrame) => {
            var sprite = cc.find("SPrite", Util.get_layer(config.layer.bg))
            sprite.getComponent(cc.Sprite).spriteFrame = spriteFrame
        })
        // 添加登陆框
        Util.addSeqLoad("Prefab/Login", cc.Prefab, (error: Error, prefab: cc.Prefab) => {
            var login = cc.instantiate(prefab)
            login.addComponent(Login)
            login.parent = Util.get_layer(config.layer.common)
            var button = cc.find("Button", login)
            var clickEvent = new cc.Component.EventHandler()
            clickEvent.target = login
            clickEvent.component = "Login"
            clickEvent.handler = "onLoginClick"
            button.getComponent(cc.Button).clickEvents.push(clickEvent)
        })
    }
}
