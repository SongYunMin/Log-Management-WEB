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
let ERROR = ["NullPointerException", "IllegalAccessException", "InstantiationException", "StackOverflowError",
    "IndexOutOfBoundException"];
let referenceDoc = ["https://developer.android.com/reference/java/lang/NullPointerException?hl=en",
    "https://developer.android.com/reference/java/lang/IllegalAccessException",
    "https://developer.android.com/reference/java/lang/InstantiationException?hl=en",
    "https://developer.android.com/reference/java/lang/StackOverflowError?hl=en",
    "https://developer.android.com/reference/java/lang/IndexOutOfBoundsException?hl=en"];
let errorHeadInit;
let errorDocInit;
let errorHead = [];         // Error Name 을 출력할 변수
let errorSection = [];
let errorDoc = [];

// Main Method
function main() {
// Sync : readFileSync , Async : readFile
    errorLog = fs.readFileSync('log.txt', 'utf-8', function (err, data) {
    });
    for (let i = 0; i < ERROR.length; i++) {            // Array Length
        let name = errorLog.indexOf(ERROR[i]);  // In File Error Detection
        if (name !== -1) {
            errorHead[i] = errorLog.substring(name, name + ERROR[i].length);
            errorDoc[i] = referenceDoc[i];
            let buf = errorLog.substring(name, name + 3000);
            let emptyCheck = 0, emptyCheckBuf = 0;

            while (true) {
                emptyCheckBuf = buf.indexOf('AndroidRuntime', emptyCheck + 14);
                // -1 emptyCheck 대입 됨
                if (emptyCheckBuf === -1) {
                    let escape = errorLog.indexOf("\n", emptyCheck);
                    // for(let j=(name+emptyCheck); j<)
                    errorSection[i] = errorLog.substring(name, name + escape);
                    console.log("start : " + name);
                    console.log("end(escape) : " + escape);
                    console.log("Log : " + errorSection[i]);
                    break;
                }
                emptyCheck = emptyCheckBuf;
            }
        }
    }
    errorHeadInit = errorHead[0];
    errorDocInit = errorDoc[0];
}



// 로그 출력
// TODO : 로그를 로딩 하는 시간이 오래 걸림
app.get("/", function (req, res) {
    console.log("Web Page Upload");
    // 각 위치에 Set함 속성은 Variable Name : Value
    res.render("index.ejs", {
        errorSection: errorSection,
        errorHead: errorHead,
        errorHeadInit: errorHeadInit,
        errorDoc: errorDoc,
        errorDocInit: errorDocInit
    });
    res.end();
});

main();
