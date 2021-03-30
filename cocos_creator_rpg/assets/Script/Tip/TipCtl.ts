// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import MyComponent from "../Extend/MyComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TipCtl extends MyComponent {
    private static _instance

    public static getInstance(): TipCtl {
        if (!this._instance) this._instance = new TipCtl()
        return this._instance
    }

    public static show(...args) {
        var instance = TipCtl.getInstance()
        instance._show(...args)
    }

    private _show(str?: string) {
        console.log(str)
    }
}
