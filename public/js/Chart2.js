var url = 'http://localhost:3010/getdata';
//var url = 'http://raspberrypi.local:3010/getdata';

const http = new XMLHttpRequest()

http.open("GET", url)
http.send()

http.onload = () => console.log(http.responseText)

