// Include Area
const express = require("express");
const app = express();
const ejs = require("ejs");
const fs = require("fs");
const bodyParser = require('body-parser');
// Network connect Area
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));  // URL Not Encoding
app.use(bodyParser.json());                         // JSON Type Parsing
app.use(express.static(__dirname + '/'));
const server = app.listen(2000, function () {
    console.log("Express server has started on port 2000");
});

// Member Field Area
var ERROR = ["NullPointerException", "IllegalAccessException", "InstantiationException", "StackOverflowError",
    "IndexOutOfBoundException"];
var errorLog = null;               // Error Log 전체를 출력할 변수
var errorHead = [];         // Error Name 을 출력할 변수
var errorSection = [];
let errorQueue;             // Error Queue 에 포함될 변수

// Main Method
function main() {
// Sync : readFileSync , Async : readFile
    errorLog = fs.readFileSync('log.txt', 'utf-8', function (err, data) {
    });
    for (let i = 0; i < ERROR.length; i++) {            // Array Length
        let name = errorLog.indexOf(ERROR[i]);  // In File Error Detection
        console.log(name);
        errorHead[i] = errorLog.substring(name, name + ERROR[i].length);
        errorSection[i] = errorLog.substring(name, name + 3000);
        console.log(errorHead[i]);
    }
// 로그 출력
// TODO : 로그를 로딩 하는 시간이 오래 걸림
    app.get("/", function (req, res) {
        console.log("Web Page Upload");
        // 각 위치에 Set함 속성은 Key:Value
        res.render("index.ejs", {errorlog: errorSection[0], errorQueue: errorHead, errorHead: errorHead[0]});
        res.end();
    });
}

main();

// TODO : 파라미터로 추가해서 접근
// Call HTML Method
function button_click() {
    let test = document.getElementById("section");
    // test.innerHTML = "TEST";
    // alert("TEST");
    // app.get("/", function (req, res) {
    console.log("Web Page Upload");
    for (let i = 0; i < ERROR.length; i++) {
        for (let j = 0; j < errorHead.length; j++) {
            if (ERROR[i] === errorHead[j]) {
                // innerHTML 사용 가능
                let sectionBuf = document.getElementById("section");
                let articleBuf = document.getElementById("article");
                sectionBuf.innerHTML = errorSection[j];
                articleBuf.innerHTML = errorHead[j];
                console.log(sectionBuf[j]);
                console.log(articleBuf[j]);
                break;
            }
        }
    }
}