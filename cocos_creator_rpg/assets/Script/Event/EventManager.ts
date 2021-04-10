const { ccclass, property } = cc._decorator;

export type CallbackFun = (data: any) => void
interface Callback { fun: CallbackFun, target: cc.Node }

export class ListenItem {
    event: string
    fun: CallbackFun
    target: cc.Node
}

@ccclass
export class EventManager {
    // 监听obj
    private static _instance: { [event: string]: Callback[] } = {}
    // 单次触发, 中断emit
    private static _emit_flag: boolean = true
    // 单次触发, 排除某些回调emit
    private static _emit_exclude: Callback[] = []

    public static register(listenItem: ListenItem) {
        const event = listenItem.event
        const target = listenItem.target
        const callbackFun = listenItem.fun
        var callbackList = EventManager._instance[event]
        if (!callbackList) {
            callbackList = []
            EventManager._instance[event] = callbackList
        }
        var index = EventManager._getIndex(target, callbackFun, callbackList)
        if (index == undefined) callbackList.push({ fun: callbackFun, target: target })
    }

    public static unregister(listenItem: ListenItem) {
        var callbackList = EventManager._instance[listenItem.event]
        if (!callbackList) return
        var index = EventManager._getIndex(listenItem.target, listenItem.fun, callbackList)
        if (index != undefined) callbackList.splice(index, 1)
    }

    public static emit(event: string, data?: any) {
        var callbackList = EventManager._instance[event]
        if (!callbackList) return
        // 复制一份先
        var tmpCallbackList = new Array(callbackList.length)
        for (let i = 0; i < callbackList.length; i++) {
            tmpCallbackList[i] = callbackList[i]
        }
        var tmpCallback: Callback
        var tmpTarget: cc.Node
        var tmpCallbackFun: CallbackFun
        var tmpIndex, tmpExcludeIndex
        for (let i = 0; i < tmpCallbackList.length; i++) {
            if (EventManager._emit_flag) {
                tmpCallback = tmpCallbackList[i]
                tmpTarget = tmpCallback.target
                tmpCallbackFun = tmpCallback.fun
                // 判断监听还在不在
                tmpIndex = EventManager._getIndex(tmpTarget, tmpCallbackFun, EventManager._instance[event])
                if (tmpIndex != undefined) {
                    if (tmpTarget && cc.isValid(tmpTarget, true)) {
                        // 判断是否在exclude列表内
                        tmpExcludeIndex = EventManager._getIndex(tmpTarget, tmpCallbackFun, EventManager._emit_exclude)
                        if (tmpExcludeIndex == undefined)
                            tmpCallback.fun.call(tmpCallback.target, data)
                    } else {
                        // object没了, 但是监听没删除
                        console.warn("emit empty target", event, tmpCallbackFun)
                        EventManager.unregister({ event: event, fun: tmpCallbackFun, target: tmpTarget })
                    }
                }
            } else {
                EventManager._emit_flag = true
                EventManager._emit_exclude = []
                break
            }
        }
        EventManager._emit_flag = true
        EventManager._emit_exclude = []
    }

    public static stopEmit() {
        EventManager._emit_flag = false
    }

    public static registerExclude(callbackFun: CallbackFun, target: cc.Node) {
        var callbackList = EventManager._emit_exclude
        var index = EventManager._getIndex(target, callbackFun, callbackList)
        if (index != undefined) callbackList[index] = { fun: callbackFun, target: target }
        else callbackList.push({ fun: callbackFun, target: target })
    }

    public static unregisterExclude(callbackFun: CallbackFun, target: cc.Node) {
        var callbackList = EventManager._emit_exclude
        if (!callbackList) return
        var index = EventManager._getIndex(target, callbackFun, callbackList)
        if (index != undefined) callbackList.splice(index, 1)
    }

    private static _getIndex(target, callbackFun, callbackList) {
        var callback: Callback
        for (let i = 0; i < callbackList.length; i++) {
            callback = callbackList[i]
            if (callback.target == target && callback.fun == callbackFun) {
                return i
            }
        }
    }
}
