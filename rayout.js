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
var errorInit;
var errorHead = [];         // Error Name 을 출력할 변수
var errorSection = [];

// Main Method
function main() {
// Sync : readFileSync , Async : readFile
    errorLog = fs.readFileSync('log.txt', 'utf-8', function (err, data) {
    });
    for (let i = 0; i < ERROR.length; i++) {            // Array Length
        let name = errorLog.indexOf(ERROR[i]);  // In File Error Detection
        if (name !== -1) {
            console.log(name);
            // 일치하지 않을때 -1을 반환하니 이상한 값이 같이 들어온 것
            errorHead[i] = errorLog.substring(name, name + ERROR[i].length);
            errorSection[i] = errorLog.substring(name, name + 3000);
        }
        console.log(errorHead[i]);
    }
    errorInit = errorHead[0];

}
// 로그 출력
// TODO : 로그를 로딩 하는 시간이 오래 걸림
app.get("/", function (req, res) {
    console.log("Web Page Upload");
    // 각 위치에 Set함 속성은 Variable Name : Value
    res.render("index.ejs", {
        errorSection: errorSection,
        errorHead: errorHead,
        errorInit: errorInit
    });
    
    
    res.end();

});

main();

// TODO : 외부 JS 파일 사용해서 하는것 고려
// Call HTML Method
function button_click(errorH, errorS, index) {
    console.log("message : " + errorH);
    console.log("index : " + index);
    // test.innerHTML = "TEST";
    // alert("TEST");
    // app.get("/", function (req, res) {
    console.log("Web Page Upload");
        for (let i = 0; i < errorH.length; i++) {
        if (errorH[i] === errorH[index]) {          //  TODO : 논리적 오류 해결해야 함
            // innerHTML 사용 가능
            let sectionBuf = document.getElementById("section");
            let headerBuf = document.getElementById("header");
            sectionBuf.innerHTML = errorS[i];
            headerBuf.innerHTML = errorH[i];
            return;
        }
    }
}
