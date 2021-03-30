import * as fs from "fs"
import * as child_process from "child_process"
import { exit } from "process"

const targetDir = "../../assets/Script/Protobuf/"
const binDir = "../../node_modules/.bin/"

// Pb.js
// 直接cmd就行了
child_process.execSync("\"" + binDir + "pbjs\" -t static-module -w commonjs -o " + targetDir + "Pb.js proto/*.proto", { windowsHide: true })
console.log("write " + targetDir + "Pb.js")
child_process.execSync("\"" + binDir + "pbts\" -o " + targetDir + "Pb.d.ts " + targetDir + "Pb.js", { windowsHide: true })
console.log("write " + targetDir + "Pb.d.ts")

// PbMapping.ts
// 遍历所有proto, 获取proto和名字
const dir = "proto"
var proto2name = {}
var fileNameList = fs.readdirSync(dir)
var fileName
for (var i = 0; i < fileNameList.length; i++) {
    fileName = fileNameList[i]
    var data = fs.readFileSync(dir + "/" + fileName)
    if (!data) {
        console.log("read " + fileName + " error")
        exit()
    }
    var proto, name
    for (const line of data.toString().split(/[\r\n]+/)) {
        var match = line.match("message *([A-z0-9_]*) *{// *([0-9]*)")
        if (match) {
            name = match[1]
            proto = match[2]
            if (!parseInt(proto)) {
                console.log("read " + fileName + " error\nbad proto ", proto)
                exit()
            }
            proto2name[proto] = name
        }
    }
}

// 构造PbMapping文件
var pbMappingData = ""
var proto2nameData = "export const proto2name = {\n"
var name2protoData = "export const name2proto = {\n"
for (const key in proto2name) {
    proto2nameData += "    " + key + " : \"" + proto2name[key] + "\",\n"
    name2protoData += "    " + proto2name[key] + " : " + key + ",\n"
}
pbMappingData += proto2nameData + "}\n\n"
pbMappingData += name2protoData + "}\n\n"

// 写文件
fs.writeFile(targetDir + "PbMapping.ts", pbMappingData, (err) => {
    if (err) console.log("write " + targetDir + "PbMapping.ts error\n", err)
    else console.log("write " + targetDir + "PbMapping.ts")
})