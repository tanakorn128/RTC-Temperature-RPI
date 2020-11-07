# RTC-Temperature-RPI
อธิบายการทำงาน
1.	app -> views -> Index.jade 
จะมีการสร้าง table สำหรับการแสดงข้อมูลในรูปของตาราง
2.	public -> js -< lib -> Chart.js   
เป็น library Chart.js   การสร้าง JavaScript charts สร้างกราฟ และแสดงผลบน canvas
3.	public -> js -< lib ->res01.js
การอ่านข้อมูล update ข้อมูลของกราฟที่นี
4.	index.route.js 
จะเป็นการรับ required ซึ่งกำหนดไว้ เป็น Get และ Post 
5.	data.controller.js 
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

การใช้งาน
1. Start Server $ node index
2. เข้าใช้งานโดยใช้ http://raspberrypi.local:3010
3. การทดลองอ่านค่าอุณภูมิ $python TempRtc.py 
เป็นการใช้ Python ในการอ่านค่า และส่งให้ http://raspberrypi.local:3010/addData/
