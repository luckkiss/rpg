// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import NetworkManager from "../Network/NetworkManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PersistNode extends cc.Component {

    onLoad() {
        this.node.addComponent(NetworkManager)
    }
}
