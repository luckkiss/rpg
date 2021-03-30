"use strict";
exports.__esModule = true;
var fs = require("fs");
var child_process = require("child_process");
var process_1 = require("process");
var targetDir = "../../assets/Script/Protobuf/";
var binDir = "../../node_modules/.bin/";
// Pb.js
// 直接cmd就行了
child_process.execSync("\"" + binDir + "pbjs\" -t static-module -w commonjs -o " + targetDir + "Pb.js proto/*.proto", { windowsHide: true });
console.log("write " + targetDir + "Pb.js");
child_process.execSync("\"" + binDir + "pbts\" -o " + targetDir + "Pb.d.ts " + targetDir + "Pb.js", { windowsHide: true });
console.log("write " + targetDir + "Pb.d.ts");
// PbMapping.ts
// 遍历所有proto, 获取proto和名字
var dir = "proto";
var proto2name = {};
var fileNameList = fs.readdirSync(dir);
var fileName;
for (var i = 0; i < fileNameList.length; i++) {
    fileName = fileNameList[i];
    var data = fs.readFileSync(dir + "/" + fileName);
    if (!data) {
        console.log("read " + fileName + " error");
        process_1.exit();
    }
    var proto, name;
    for (var _i = 0, _a = data.toString().split(/[\r\n]+/); _i < _a.length; _i++) {
        var line = _a[_i];
        var match = line.match("message *([A-z0-9_]*) *{// *([0-9]*)");
        if (match) {
            name = match[1];
            proto = match[2];
            if (!parseInt(proto)) {
                console.log("read " + fileName + " error\nbad proto ", proto);
                process_1.exit();
            }
            proto2name[proto] = name;
        }
    }
}
// 构造PbMapping文件
var pbMappingData = "";
var proto2nameData = "export const proto2name = {\n";
var name2protoData = "export const name2proto = {\n";
for (var key in proto2name) {
    proto2nameData += "    " + key + " : \"" + proto2name[key] + "\",\n";
    name2protoData += "    " + proto2name[key] + " : " + key + ",\n";
}
pbMappingData += proto2nameData + "}\n\n";
pbMappingData += name2protoData + "}\n\n";
// 写文件
fs.writeFile(targetDir + "PbMapping.ts", pbMappingData, function (err) {
    if (err)
        console.log("write " + targetDir + "PbMapping.ts error\n", err);
    else
        console.log("write " + targetDir + "PbMapping.ts");
});
