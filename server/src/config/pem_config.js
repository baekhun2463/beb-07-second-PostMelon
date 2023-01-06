const fs = require("fs");
const path = require("path");
// const keys_dir = "./secure"; // 키 파일, 상대경로 수정 필요
const absolutePath = path.resolve("src/config/secure");

const key = fs.readFileSync(absolutePath + "/key.pem");
const cert = fs.readFileSync(absolutePath + "/cert.pem");

module.exports.options = {
    cert,
    key,
};