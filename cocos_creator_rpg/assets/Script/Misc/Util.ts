import Global from "./Glaobal"

export class seqLoadItem {
    _uuid: number// 自动赋值
    paths: string | string[]
    type: typeof cc.Asset
    onComplete: (error: Error, assets: cc.Asset | Array<cc.Asset>) => void
}

export default class Util {

    public static uuid(): number {
        Global.uuid += 1
        return Global.uuid
    }

    public static addSeqLoad(paths: string | string[], type: typeof cc.Asset, onComplete: (error: Error, assets: cc.Asset | Array<cc.Asset>) => void): number {
        var seqLoadItem: seqLoadItem = {
            _uuid: Util.uuid(),
            paths: paths,
            type: type,
            onComplete: onComplete
        }
        Global.seqLoad.push(seqLoadItem)
        if (Global.seqLoad.length > 1) return seqLoadItem._uuid
        cc.resources.load(paths, type, Util._doSeqLosd)
        return seqLoadItem._uuid
    }

    public static delSeqLoad(uuid: number): boolean {
        for (var i = 0; i < Global.seqLoad.length; i++) {
            if (Global.seqLoad[i]._uuid == uuid) {
                Global.seqLoad.splice(i, 1)
                return true
            }
        }
        return false
    }


    public static _doSeqLosd(error, assets: cc.Asset) {
        try {
            Global.seqLoad[0].onComplete(error, assets)
        }
        catch (err) {
            console.log(err)
        } finally {
            Global.seqLoad.splice(0, 1)
            if (Global.seqLoad.length == 0) return
            var seqLoadItem = Global.seqLoad[0]
            cc.resources.load(seqLoadItem.paths, seqLoadItem.type, Util._doSeqLosd)
        }
    }

    public static get_layer(index: number): cc.Node {
        return cc.find("Canvas/Layer" + index)
    }
}
