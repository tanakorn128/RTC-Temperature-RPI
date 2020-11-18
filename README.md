# RTC-Temperature-RPI

![GitHub Logo](/img/1.png)
### index .js
```javascript
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var cors = require('cors');
var db = mongoose();
var app = express();
var render = function(req, res) {

}
app.use(cors({origin: 'null'}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.listen(3010);
module.exports = app;

console.log('Server running at http://localhost:3010');

###temp_rtc.model.js
```javascript
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var tempSensorRTCSchema=new Schema({
    temperature: Number,
    humidity: Number,
    year: Number,
    month: Number,
    day: Number,
    hour: Number,
    minute: Number
});
const temp_rtc=mongoose.model('temp_rtc',tempSensorRTCSchema);
module.exports={temp_rtc}
```
###index.route.js
```javascript
module.exports = (app) => {
    var index = require('../controllers/data.controller');
    //app.get('/', index.render).post('/addData', index.addData).get('/data', index.getData);
    app.post('/addData', index.addData).get('/getData', index.getData).get('/', index.render);
    app.get('/humidity', index.humidity);

}
```







###อธิบายการทำงาน
1.	app -> views -> Index.jade 
จะมีการสร้าง table สำหรับการแสดงข้อมูลในรูปของตาราง
2.	public -> js -> lib -> Chart.js 
เป็น library Chart.js   การสร้าง JavaScript charts สร้างกราฟ และแสดงผลบน canvas
3.	public -> js -< lib ->res01.js
การอ่านข้อมูล update ข้อมูลของกราฟที่นี
4.	index.route.js 
จะเป็นการรับ required ซึ่งกำหนดไว้ เป็น Get และ Post 
5.	app -> controllers -> data.controller.js 
เมื่อมี required เข้ามาจาก index.route.js จะมาทำงานในนี้ 
addData เมื่อมีการ  required save ข้อมูลลง mongoDB โดยใช้ module ที่ได้สร้างไว้แล้ว
getData เป็นการ required และแสดงมูลข้อมูลในฐานข้อมูล
6.	temp_rtc.model.js 
จะสร้าง Schema ไว้ที่นี้ 
7.	index.js 
สำหรับ Start Server ใช้ Express 
8.	package.json 
สามารถดูได้ว่าได้ติดตั้ง package อะไรไว้บ้าง การติดตั้ง package ใช้ npm install <module> --save
9.	TempRtc.py 
เป็นการอ่านค่าจากอุณภูมิ โดยติดตั้ง library Adafruit_DHT และ library adafruit_ds3231 ในการอ่านข้อมูลจากเซ็นเซอร์

###การใช้งาน
1. Start Server $ node index
2. เข้าใช้งานโดยใช้ http://raspberrypi.local:3010
3. การทดลองอ่านค่าอุณภูมิ $python TempRtc.py 
เป็นการใช้ Python ในการอ่านค่า และส่งให้ http://raspberrypi.local:3010/addData/
