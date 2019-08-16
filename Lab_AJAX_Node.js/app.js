// 以 Express 建立 Web 伺服器
var express = require("express");
var app = express();

// 允許跨域使用本服務
var cors = require("cors");
app.use(cors());

// Web 伺服器的靜態檔案置於 public 資料夾
app.use( express.static( "public" ) );

// 以 body-parser 模組協助 Express 解析表單與JSON資料
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) );

// 一切就緒，開始接受用戶端連線
// app.listen(process.env.PORT);
app.listen(80);
console.log("Web伺服器就緒，開始接受用戶端連線.");
console.log("鍵盤「Ctrl + C」可結束伺服器程式.");

// ---------------

app.get("/hello/:text", function (request, response) {
	// 模擬程式三秒鐘延遲
	var stop = new Date().getTime();
    while(new Date().getTime() < stop + 3000) {
        ;
    }	
	
	response.send("Hello! " + request.params.text);
});

app.post("/test", function (request, response) {
	var firstName = request.body.firstName;
	var lastName = request.body.lastName;
	response.send(firstName + " " + lastName);
});

