// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import MyComponent from "../Extend/MyComponent";
import CreateCtl from "../Login/CreateCtl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainCanvasCtl extends MyComponent {

    private show: string = "login"

    private login: cc.Node
    private create: cc.Node

    onFirstLoad() {
        cc.resources.load("Prefab/Login", (err, prefab: cc.Prefab) => {
            if (err) console.log(err)
            this.login = cc.instantiate(prefab)
            this.node.addChild(this.login)
            this.login.active = false
        })
        cc.resources.load("Prefab/Create", (err, prefab: cc.Prefab) => {
            if (err) console.log(err)
            this.create = cc.instantiate(prefab)
            this.node.addChild(this.create)
            this.create.active = false
        })
    }

    update() {
        if (this.show == "login" && this.login && this.login.active == false) {
            this.login.active = true
            if (this.create) this.create.active = false
        } else if (this.show == "create" && this.create && this.create.active == false) {
            if (this.login) this.login.active = false
            this.create.active = true
            this.create.getComponent(CreateCtl).updateCreateItm()
        }
    }

    public showLogin() {
        this.show = "login"
    }

    public showCreate() {
        this.show = "create"
    }
}
