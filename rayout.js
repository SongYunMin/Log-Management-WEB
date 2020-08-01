const express = require("express");
const ejs = require("ejs");
const bodyParser = require('body-parser');
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));  // URL 인코딩 안함
app.use(bodyParser.json());                         // JSON 타입으로 파싱하게 설정
app.use(express.static(__dirname + '/'));

const server = app.listen(2000, function () {
    console.log("Express server has started on port 2000")
});

let buf;
let fs = require('fs');
fs.readFile('log.txt', 'utf-8', function (err, data) {
        buf = data;
        console.log(buf);
    }
)
// 로그 출력
app.get("/", function (req, res) {
    console.log("Web Page Upload");
    res.render("index", {buf: buf});
});
