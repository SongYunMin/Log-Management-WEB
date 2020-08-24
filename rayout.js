const express = require("express");
const app = express();
const ejs = require("ejs");
const fs = require("fs");
const bodyParser = require('body-parser');
// Network connect Area
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));  // URL 인코딩 안함
app.use(bodyParser.json());                         // JSON 타입으로 파싱하게 설정
app.use(express.static(__dirname + '/'));

// TODO : elastic 분산 DB 사용 고려
const server = app.listen(2000, function () {
    console.log("Express server has started on port 2000")
});

// 미리 지정한 에러
const ERROR = ["NullPointerException", "IllegalAccessException", "InstantiationException", "StackOverflowError",
    "IndexOutOfBoundException"];
let errorLog;               // Error Log 전체를 출력할 변수
let errorHead;              // Error Name 을 출력할 변수
let errorSection;
let errorQueue;             // Error Queue 에 포함될 변수

// 로그 출력
// TODO : 로그를 로딩 하는 시간이 오래 걸림
app.get("/", function (req, res) {
    console.log("Web Page Upload");
    // 각 위치에 Set함 속성은 Key:Value
    res.render("index", {errorlog: errorSection, errorQueue: ERROR, errorHead: errorHead});
});

let file = fs.readFile('log.txt', 'utf-8', function (err, data) {
        errorLog = data;
        // for(let i=0;i<ERROR.length;i++) {
        //     // TODO : 2중 for 이용, 에러 분석
        //     let name = errorLog.indexOf("NullPointerException");
        // }
        let name = errorLog.indexOf("NullPointerException");
        const errorTest = "NullPointerException";

        errorHead = errorLog.substring(name, name + errorTest.length);
        errorSection = errorLog.substring(name, name + 3000);
        console.log(errorHead);
    }
);

// 파일을 읽으면서 구문 분석 진행 함
function fileRead() {
    const express = require("express");
    const app = express();

}

function button_click() {
    // Network connect Area
    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({extended: false}));  // URL 인코딩 안함
    app.use(bodyParser.json());                         // JSON 타입으로 파싱하게 설정
    app.use(express.static(__dirname + '/'));
    // 로그 출력
// TODO : 로그를 로딩 하는 시간이 오래 걸림
    app.get("/", function (req, res) {
        console.log("Web Page Upload");
        // 각 위치에 Set함 속성은 Key:Value
        res.render("index", {errorlog: errorSection, errorQueue: errorQueue, errorHead: errorHead});
    });
    console.log(errorLog);
}
