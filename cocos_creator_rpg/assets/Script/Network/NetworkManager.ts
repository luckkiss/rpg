const { ccclass, property } = cc._decorator;

import Network from "./Network"
import * as pb from "../Protobuf/Pb"
import { config } from "../Misc/Config";
import { ListenItem } from "../Event/EventManager";
import { Event } from "../Event/EvnetDef";

@ccclass
export default class NetworkManager extends cc.Component {

    private heartTime: number = config.game.heartTime

    onLoad() {
        Network.connect();
    }

    registerEvent() {
        // return [
        //     { event: Event.NetWork.connect, fun: this.onConnect, target: this },
        //     { event: Event.NetWork.reconnect, fun: this.onReconnect, target: this },
        //     { event: Event.NetWork.disconnect, fun: this.onDisconnect, target: this },
        //     { event: "gateway_s_error", fun: this.onErrorCode, target: this },
        // ]
    }

    update(dt) {
        this.heartTime -= dt;
        if (this.heartTime <= 0 && Network.isReady()) {
            var msg = pb.gateway_c_heart.create()
            Network.send(msg);
            this.heartTime = config.game.heartTime;
        }
    }

    public static reconnect() {
        Network.reconnect();
    }

    public onConnect() {
        console.log("onConnect");

    }

    public onReconnect() {
        console.log("onReconnect");
    }

    public onDisconnect() {
        console.log("onDisconnect");
        Network.connect();
    }

    public onErrorCode(msg: pb.game_s_error) {
        console.log(msg.proto, msg.code)
    }
}
