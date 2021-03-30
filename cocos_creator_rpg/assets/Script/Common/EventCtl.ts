const { ccclass, property } = cc._decorator;

export type CallbackFun = (data: any) => void
interface Callback { fun: CallbackFun, register: object }

export class ListenItem {
    event: string
    fun: CallbackFun
    target: object
}

@ccclass
export class EventCtl {
    // 监听obj
    private static _instance: { [event: string]: Callback[] } = {}
    // 单次触发, 中断emit
    private static _emit_flag: boolean = true
    // 单次触发, 排除某些回调emit
    private static _emit_exclude: Callback[] = []

    public static register(listenItem: ListenItem) {
        const event = listenItem.event
        const register = listenItem.target
        const callbackFun = listenItem.fun
        var callbackList = EventCtl._instance[event]
        if (!callbackList) {
            callbackList = []
            EventCtl._instance[event] = callbackList
        }
        var index = EventCtl._getIndex(register, callbackFun, callbackList)
        if (index == undefined) callbackList.push({ fun: callbackFun, register: register })
    }

    public static unregister(listenItem: ListenItem) {
        var callbackList = EventCtl._instance[listenItem.event]
        if (!callbackList) return
        var index = EventCtl._getIndex(listenItem.target, listenItem.fun, callbackList)
        if (index != undefined) callbackList.splice(index, 1)
    }

    public static emit(event: string, data?: any) {
        var callbackList = EventCtl._instance[event]
        if (!callbackList) return
        // 复制一份先
        var tmpCallbackList = new Array(callbackList.length)
        for (let i = 0; i < callbackList.length; i++) {
            tmpCallbackList[i] = callbackList[i]
        }
        var tmpCallback: Callback
        var tmpRegister: object
        var tmpCallbackFun: CallbackFun
        var tmpIndex, tmpExcludeIndex
        for (let i = 0; i < tmpCallbackList.length; i++) {
            if (EventCtl._emit_flag) {
                tmpCallback = tmpCallbackList[i]
                tmpRegister = tmpCallback.register
                tmpCallbackFun = tmpCallback.fun
                // 判断监听还在不在
                tmpIndex = EventCtl._getIndex(tmpRegister, tmpCallbackFun, EventCtl._instance[event])
                if (tmpIndex != undefined) {
                    if (tmpRegister) {
                        // 判断是否在exclude列表内
                        tmpExcludeIndex = EventCtl._getIndex(tmpRegister, tmpCallbackFun, EventCtl._emit_exclude)
                        if (tmpExcludeIndex == undefined)
                            tmpCallback.fun.call(tmpCallback.register, data)
                    } else {
                        // object没了, 但是监听没删除
                        console.warn("emit empty register", event, tmpCallbackFun)
                        EventCtl.unregister({ event: event, fun: tmpCallbackFun, target: tmpRegister })
                    }
                }
            } else {
                EventCtl._emit_flag = true
                EventCtl._emit_exclude = []
                break
            }
        }
        EventCtl._emit_flag = true
        EventCtl._emit_exclude = []
    }

    public static stopEmit() {
        EventCtl._emit_flag = false
    }

    public static registerExclude(callbackFun: CallbackFun, register: object) {
        var callbackList = EventCtl._emit_exclude
        var index = EventCtl._getIndex(register, callbackFun, callbackList)
        if (index != undefined) callbackList[index] = { fun: callbackFun, register: register }
        else callbackList.push({ fun: callbackFun, register: register })
    }

    public static unregisterExclude(callbackFun: CallbackFun, register: object) {
        var callbackList = EventCtl._emit_exclude
        if (!callbackList) return
        var index = EventCtl._getIndex(register, callbackFun, callbackList)
        if (index != undefined) callbackList.splice(index, 1)
    }

    private static _getIndex(register, callbackFun, callbackList) {
        var callback: Callback
        for (let i = 0; i < callbackList.length; i++) {
            callback = callbackList[i]
            if (callback.register == register && callback.fun == callbackFun) {
                return i
            }
        }
    }
}
