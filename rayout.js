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
            //console.log(name);
            // 일치하지 않을때 -1을 반환하니 이상한 값이 같이 들어온 것
            errorHead[i] = errorLog.substring(name, name + ERROR[i].length);
            let buf = errorLog.substring(name, name + 3000);
            let emptyCheck = 0, emptyCheckBuf = 0;
            let lastLine;

            while(true){
                emptyCheckBuf = buf.indexOf('AndroidRuntime',emptyCheck+14);
                // -1 emptyCheck 대입 됨
                if(emptyCheckBuf === -1){
                    let escape = errorLog.indexOf("\n",emptyCheck);
                    // for(let j=(name+emptyCheck); j<)
                    errorSection[i] = errorLog.substring(name, name+escape);
                    console.log("start : " + name);
                    console.log("end(escape) : " + escape);
                    console.log("Log : " + errorSection[i]);
                    break;
                }
                emptyCheck = emptyCheckBuf;

            }
            // console.log(errorSection[i]);
            // Test Case
            // emptyCheckBuf = buf.indexOf('AndroidRuntime', emptyCheck+14);
            // emptyCheck = emptyCheckBuf;
            // console.log(emptyCheck);
            // emptyCheckBuf = buf.indexOf('AndroidRuntime', emptyCheck+14);
            // emptyCheck = emptyCheckBuf;
            // console.log(emptyCheck);
            // errorSection[i] = errorLog.substring(name, name+emptyCheck);
            // console.log(errorSection[i]);
            // console.log(name);
            // console.log(name+emptyCheck);
        }
       // console.log(errorHead[i]);
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

// // Call HTML Method
// function button_click() {
//     console.log("message : " + errorH);
//     console.log("index : " + index);
//     console.log("Web Page Upload");
//     for (var i = 0; i < errorH.length; i++) {
//         if (errorH[i] === errorH[index]) {
//             // innerHTML 사용 가능
//             let sectionBuf = document.getElementById("section");
//             let headerBuf = document.getElementById("header");
//             sectionBuf.innerHTML = errorS[i];
//             headerBuf.innerHTML = errorH[i];
//         }
//     }
// }
