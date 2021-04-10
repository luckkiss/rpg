import { EventManager } from "../Event/EventManager";
import { Event } from "../Event/EvnetDef"
import { config } from "../Misc/Config";
import * as Pb from "../Protobuf/Pb"
import { proto2name, name2proto } from "../Protobuf/PbMapping"

export default class Network {
    static _ws: WebSocket = null;
    static _isReconnect: boolean = false;

    public static connect() {
        if (Network._ws != null) {
            console.log("already connect")
            return
        }
        var ws = new WebSocket(config.ws.path);
        Network._ws = ws;

        ws.onopen = function (event) {
            if (Network._isReconnect) {
                EventManager.emit(Event.NetWork.reconnect, null);
            } else {
                Network._isReconnect = true;
                EventManager.emit(Event.NetWork.connect, null);
            }
        };
        ws.onmessage = function (event) {
            var data = event.data as Blob
            var fileReader = new FileReader()
            fileReader.onload = function (e) {
                var result = fileReader.result as ArrayBuffer
                let warpMsg = Pb.gateway_s_warp.decode(new Uint8Array(result))
                // 解析协议
                var msgName = proto2name[warpMsg.proto]
                let msg = Pb[msgName].decode(warpMsg.data)
                EventManager.emit(msgName, msg)
                console.log("receive ", msgName, msg)
            }
            fileReader.readAsArrayBuffer(data);
        };
        ws.onerror = function (event) {
            console.log("WebSocket error ", event);
        };
        ws.onclose = function (event) {
            Network._ws = null;
            EventManager.emit(Event.NetWork.disconnect, null);
        };
    }

    public static send(pbInstance) {
        if (this.isReady()) {
            var msgName = pbInstance.constructor.name;
            var msg = new Pb.gateway_c_warp()
            msg.proto = name2proto[msgName]
            msg.data = Pb[msgName].encode(pbInstance).finish()
            var data = Pb.gateway_c_warp.encode(msg).finish()
            Network._ws.send(data)
            console.log("send ", msgName, pbInstance)
        } else {
            console.log("WebSocket disconnect ", pbInstance)
        }
    }

    public static reconnect() {
        Network._isReconnect = false;
        Network._ws.close();
    }

    public static isReady() {
        return Network._ws != null && Network._ws.readyState == WebSocket.OPEN
    }

}
