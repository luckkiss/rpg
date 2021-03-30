const { ccclass, property } = cc._decorator;

import {EventCtl, ListenItem} from "../Common/EventCtl"
import Network from "./Network"
import * as pb from "../Protobuf/Pb"
import { Event } from "../Common/EvnetDef"
import { config } from "../Common/Config";
import MainCanvasCtl from "../Canvas/MainCanvasCtl";
import MyComponent from "../Extend/MyComponent";

@ccclass
export default class NetworkCtl extends MyComponent {

    private heartTime: number = config.game.heartTime

    onFirstLoad() {
        console.log("NetworkCtl load ");
        cc.game.addPersistRootNode(this.node);
        Network.connect();
    }

    registerEvent(): ListenItem[] {
        return [
            { event: Event.NetWork.connect, fun: this.onConnect, target: this },
            { event: Event.NetWork.reconnect, fun: this.onReconnect, target: this },
            { event: Event.NetWork.disconnect, fun: this.onDisconnect, target: this },
            { event: "gateway_s_error", fun: this.onErrorCode, target: this },
        ]
    }

    update(dt) {
        this.heartTime -= dt;
        if (this.heartTime <= 0 && Network.isReady()) {
            var msg = pb.gateway_c_heart.create()
            Network.send(msg);
            this.heartTime = 15;
        }
    }

    public static reconnect() {
        Network.reconnect();
    }

    public onConnect() {
        cc.find("Canvas").getComponent(MainCanvasCtl).showLogin()
        console.log("onConnect");

    }

    public onReconnect() {
        console.log("onReconnect");
    }

    public onDisconnect() {
        console.log("onDisconnect");
        Network.connect();
    }

    public onErrorCode(msg: pb.gateway_s_error) {
        console.log(msg.proto, msg.code)
    }
}
