const express = require("express");
const ejs = require("ejs");
const bodyParser = require('body-parser');
const app = express();


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
let errorQueue;             // Error Queue 에 포함될 변수

// 파일을 읽으면서 구문 분석 진행 함
function fileRead() {
    let fs = require('fs');
    let file = fs.readFile('log.txt', 'utf-8', function (err, data) {
            errorLog = data;
            // TODO : 에러 부분 크롤링 필요
            // TODO : 크롤링 이후 현재 로그에 있는 값 분석, Web 출력
        // for(let i=0;i<ERROR.length;i++) {
        //     // TODO : 2중 for 이용, 에러 분석
        //     let name = errorLog.indexOf("NullPointerException");
        // }
        let name = errorLog.indexOf("NullPointerException");
        const errorTest = "NullPointerException";
        // console.log("에러 길이 : "+errorTest.length);
            // console.l og(name);
            errorHead = errorLog.substring(name,name+errorTest.length);
            console.log(errorHead);
        }
    );

    console.log(errorLog);
// 로그 출력
// TODO : 로그를 로딩 하는 시간이 오래 걸림
    app.get("/", function (req, res) {
        console.log("Web Page Upload");
        // 각 위치에 Set함 속성은 Key:Value
        res.render("index", {errorlog: errorLog, errorQueue:errorHead,errorHead:errorHead});
    });
}
function NameSearch(errorlog) {
    //let ch = errorLog.indexOf("NullPointerException");
    console.log(errorlog);
}

fileRead();
