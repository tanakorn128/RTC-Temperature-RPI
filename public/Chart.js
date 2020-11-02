//let url = "http//raspberrypi.local:30010/getdata"

function httpGet() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http//raspberrypi.local:30010/getdata", false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
console.log(httpGet());