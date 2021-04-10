import { config } from "../Misc/Config";
import Util from "../Misc/Util";
import NoticeTip from "./NoticeTip";

export default class NoticeTipManager {
    private static _instance: NoticeTipManager = new NoticeTipManager();
    private noticeList: cc.Node[] = []

    constructor() {
        return NoticeTipManager._instance;
    }

    public static getInstance(): NoticeTipManager {
        return this._instance;
    }

    public static init() {
        cc.resources.load("Prefab/NoticeTip", cc.Prefab, (error, prefab: cc.Prefab) => {
            var node: cc.Node
            var noticeLayer = Util.get_layer(config.layer.notice_tip)
            for (let i = 0; i < config.notice_tip.size; i++) {
                node = cc.instantiate(prefab)
                node.addComponent(NoticeTip)
                node.parent = noticeLayer
                node.active = false
                NoticeTipManager._instance.noticeList.push(node)
            }
        })
    }

    public static notice(str) {
        var instance = NoticeTipManager.getInstance()
        var noticeList = instance.noticeList
        for (let i = 0; i < noticeList.length; i++) {
            if (!noticeList[i].active) {
                noticeList[i].active = true
                noticeList[i].children[0].getComponent(cc.Label).string = str
                return
            }
        }
        // 全部都在用
        var last = noticeList.pop()
        last.getComponent(NoticeTip).reset()
        last.children[0].getComponent(cc.Label).string = str
        noticeList.splice(0, 0, last)
        instance.noticeList = noticeList
    }
}
