// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import MainCanvasCtl from "../Canvas/MainCanvasCtl";
import { EventCtl, ListenItem } from "../Common/EventCtl";
import { global_data } from "../Common/GlobalData";
import ControlCtl from "../Control/ControlCtl";
import MyComponent from "../Extend/MyComponent";
import CreateCtl from "../Login/CreateCtl";
import Network from "../Network/Network";
import * as Pb from "../Protobuf/Pb"
import UnitCtl, { UnitInfo } from "../Unit/UnitCtl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BattleCanvasCtl extends MyComponent {

    private setting: cc.Node
    private playerInfo: cc.Node
    private control: cc.Node
    private unitList: cc.Node
    private unitPrefab: cc.Prefab

    private unitDict: { [id: number]: UnitInfo }

    onFirstLoad() {
        cc.resources.load("Prefab/Setting", (err, prefab: cc.Prefab) => {
            this.setting = cc.instantiate(prefab)
            this.node.addChild(this.setting)
        })
        cc.resources.load("Prefab/PlayerInfo", (err, prefab: cc.Prefab) => {
            this.playerInfo = cc.instantiate(prefab)
            this.node.addChild(this.playerInfo)
            this.updatePlayerInfo()
        })
        cc.resources.load("Prefab/Control", (err, prefab: cc.Prefab) => {
            this.control = cc.instantiate(prefab)
            this.node.addChild(this.control)
        })
        this.unitDict = {}
        this.unitList = new cc.Node("UnitList")
        this.node.addChild(this.unitList)
        cc.resources.load("Prefab/Unit001", (err, prefab: cc.Prefab) => {
            this.unitPrefab = prefab
            this.updateUnitList(this.unitDict)
        })
        Network.send(Pb.player_c_info.create({}))
        Network.send(Pb.battle_c_all_unit.create({}))
    }

    registerEvent(): ListenItem[] {
        return [
            { event: "player_s_info", fun: this.player_s_info, target: this },
            { event: "battle_s_all_unit", fun: this.battle_s_all_unit, target: this },
            { event: "battle_s_update_unit", fun: this.battle_s_update_unit, target: this },
            { event: "battle_s_del_unit", fun: this.battle_s_del_unit, target: this },
            { event: "gateway_s_exit_role", fun: this.gateway_s_exit_role, target: this },
            { event: "gateway_s_exit_account", fun: this.gateway_s_exit_account, target: this },
            { event: "battle_s_skill", fun: this.battle_s_skill, target: this },
            { event: "battle_s_move_start", fun: this.battle_s_move_start, target: this },
            { event: "battle_s_move_end", fun: this.battle_s_move_end, target: this },
            { event: "battle_s_hit", fun: this.battle_s_hit, target: this },
        ]
    }

    public player_s_info(msg: Pb.player_s_info) {
        this.updatePlayerInfo()
    }

    battle_s_all_unit(msg: Pb.battle_s_all_unit) {
        const unitList = msg.unitList
        this.unitDict = {}
        var unitPkg: Pb.battle_p_unit_info
        var unitInfo: UnitInfo
        for (var i = 0; i < unitList.length; i++) {
            unitPkg = unitList[i] as Pb.battle_p_unit_info
            unitInfo = {
                id: unitPkg.id, name: unitPkg.name,
                career: unitPkg.career, x: unitPkg.x,
                y: unitPkg.y, face: unitPkg.face
            }
            this.unitDict[unitInfo.id] = unitInfo
        }
        this.updateUnitList(this.unitDict)
    }

    battle_s_update_unit(msg: Pb.battle_s_update_unit) {
        var unitPkg = msg.unit as Pb.battle_p_unit_info
        var unitInfo = {
            id: unitPkg.id, name: unitPkg.name,
            career: unitPkg.career, x: unitPkg.x,
            y: unitPkg.y, face: unitPkg.face
        }
        this.unitDict[unitPkg.id] = unitInfo
        // 只刷新这个
        this.updateUnitList({ [unitPkg.id]: unitInfo })
    }

    battle_s_del_unit(msg: Pb.battle_s_del_unit) {
        this.unitDict[msg.id] = undefined
        var unit = cc.find((msg.id).toString(), this.unitList)
        if (unit) unit.destroy()
    }

    gateway_s_exit_role(msg: Pb.gateway_s_exit_role) {
        global_data.playerId = undefined
        global_data.career = undefined
        cc.director.loadScene("main", () => {
            cc.find("Canvas").getComponent(MainCanvasCtl).showCreate()
        })
    }

    gateway_s_exit_account(msg: Pb.gateway_s_exit_account) {
        global_data.account = undefined
        global_data.roleList = undefined
        global_data.playerId = undefined
        global_data.career = undefined
        cc.director.loadScene("main")
    }

    public updatePlayerInfo() {
        const playerId = global_data.playerId
        if (this.playerInfo && playerId) {
            const roleList: Pb.gateway_p_role_info[] = global_data.roleList
            // 找到当前登陆的角色
            for (var i = 0; i < roleList.length; i++) {
                if (roleList[i].id == playerId) {
                    const str = "名字: " + roleList[i].name + "\nid: " + playerId + "\n职业: " + roleList[i].career
                    cc.find("Label", this.playerInfo).getComponent(cc.Label).string = str
                    return
                }
            }
        }
    }

    updateUnitList(unitDict: { [id: number]: UnitInfo }) {
        if (!this.unitPrefab) return
        var unit: cc.Node
        var unitInfo: UnitInfo
        for (const idStr in unitDict) {
            unitInfo = unitDict[idStr]
            unit = cc.find(idStr, this.unitList)
            if (!unit) {
                // 新节点
                var newUnit = cc.instantiate(this.unitPrefab)
                newUnit.name = idStr
                this.unitList.addChild(newUnit)
                newUnit.getComponent(UnitCtl).setInfo(unitInfo)
                // 如果是自己
                if (global_data.playerId == unitInfo.id && this.control)
                    this.control.getComponent(ControlCtl).setMyUnit(newUnit)
            } else {
                // 更新信息
                unit.getComponent(UnitCtl).setInfo(unitInfo)
            }
        }
    }

    battle_s_skill(msg: Pb.battle_s_skill) {
        var idStr = msg.id.toString()
        var unit = cc.find(idStr, this.unitList)
        if (!unit) return
        unit.getComponent(UnitCtl).attack(msg.skillId)
    }

    battle_s_move_start(msg: Pb.battle_s_move_start) {
        var idStr = msg.id.toString()
        var unit = cc.find(idStr, this.unitList)
        if (!unit) return
        unit.getComponent(UnitCtl).move(msg.face / 1000)
    }

    battle_s_move_end(msg: Pb.battle_s_move_end) {
        var idStr = msg.id.toString()
        var unit = cc.find(idStr, this.unitList)
        if (!unit) return
        unit.getComponent(UnitCtl).idle(msg.face / 1000, msg.x / 1000, msg.y / 1000)
    }

    battle_s_hit(msg: Pb.battle_s_hit) {
        var idStr = msg.id.toString()
        var unit = cc.find(idStr, this.unitList)
        if (!unit) return
        unit.getComponent(UnitCtl).hit(msg.hurt)
    }
}
