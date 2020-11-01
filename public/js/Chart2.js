//var url = 'http://localhost:3010/getdata';
var url = 'http://raspberrypi.local:3010/getdata';


var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', url, true);
req.onload = function() {
    var jsonResponse = req.response;
    // do something with jsonResponse
    console.log(jsonResponse);
};
req.send(null);