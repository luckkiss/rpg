export const config = {
    // websocket
    ws: { path: "ws://127.0.0.1:8080/ptolemaios-rpg" },
    // game
    game: {
        heartTime: 15// 心跳包, 15秒
    },

    // 画布层级
    layer: {
        bg: 0,
        common: 1,
        notice_tip: 2
    },
    // 提示tip
    notice_tip: {
        size: 3,// 同时最大数量
        speed: 100,// 移动速度
        time: 0.7// 移动时间
    }
}