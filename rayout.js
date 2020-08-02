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
let errorlog;
let fs = require('fs');
fs.readFile('log.txt', 'utf-8', function (err, data) {
        errorlog = data;
        console.log(errorlog);
    }
)
// 로그 출력
// TODO : 로그를 로딩 하는 시간이 오래 걸림
app.get("/", function (req, res) {
    console.log("Web Page Upload");
    res.render("index", {errorlog: errorlog});
});

// TODO : Log를 파싱, 구문분석을 진행해서 각각에 위치로 Set 되는 메소드 정의 필요
function NameSearch(){

}