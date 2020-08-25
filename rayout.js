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
let errorHead = [];         // Error Name 을 출력할 변수
let errorSection = [];
let errorQueue;             // Error Queue 에 포함될 변수

// '동기' readFileSync , '비동기' readFile
// 파일을 동기로 읽어서 정의된 에러와 일치하는 에러 추출
errorLog = fs.readFileSync('log.txt', 'utf-8', function (err, data) {
});
for (let i = 0; i < ERROR.length; i++) {            // 에러가 담겨있는 배열의 길이
    let name = errorLog.indexOf(ERROR[i]);  // 파일에서 에러의 위치를 찾고
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
    // 처음 에러의 내용, Log에서 검출된 모든 에러, 처음 검출된 에러의 이름
    res.render("index", {errorlog: errorSection[0], errorQueue: errorHead, errorHead: errorHead[0]});
    res.end();
});

// TODO : 버튼 클릭 시 전역 변수 인식 못하는 문제 있음
function button_click() {
    // let test =  document.getElementById("section");
    // test.innerHTML = "TEST";
    alert("TEST");
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
    // // 각 위치에 Set함 속성은 Key:Value
    // res.render("index", {errorlog: test, errorQueue: errorQueue, errorHead: errorHead});
    // res.end();
    // });
    testfunc();
}

function testfunc() {
    alert("TEEST");
}