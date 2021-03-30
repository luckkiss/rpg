// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { EventCtl, ListenItem } from "../Common/EventCtl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MyComponent extends cc.Component {
    private _has_load: Boolean
    private _has_start: Boolean
    private _listenEventList: ListenItem[]

    protected onFirstLoad() { }
    protected onLoadAgain() { }

    protected onFirstStart() { }
    protected onStartAgain() { }

    onLoad() {
        if (!this._has_load) {
            this._has_load = true
            this.onFirstLoad()
            this._listenEventList = this.registerEvent()
            for (var i = 0; i < this._listenEventList.length; i++) {
                EventCtl.register(this._listenEventList[i])
            }
        } else {
            this.onLoadAgain()
        }
    }

    start() {
        if (!this._has_start) {
            this._has_start = true
            this.onFirstStart()
        } else {
            this.onStartAgain()
        }
    }

    registerEvent(): ListenItem[] {
        return []
    }

    onDestroy() {
        // 取消注册实践
        for (var i = 0; i < this._listenEventList.length; i++) {
            EventCtl.unregister(this._listenEventList[i])
        }
    }
}
