//const { json } = require("express");


var url = 'http://localhost:3010/getdata';
//var url = 'http://raspberrypi.local:3010/getdata';

//----------------------------------------------------------------------------------------------------
function makeRequest(method, url, data) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        if (method == "POST" && data) {
            xhr.send(data);
        } else {
            xhr.send();
        }
    });
}

//GET example
makeRequest('GET', url).then(function(data) {
    var results = JSON.parse(data);
    console.log(results)
});

//----------------------------------------------------------------------------------------------------


function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        console.log(response);
    }
}

fetch(url).then(function(response) {
    return response.json();
}).then(function(data) {
    let obj = JSON.stringify(data);
    let JSobj = JSON.parse(obj);
    let update = JSobj.length - 1;

    //console.log(obj);
    // console.log(update);
    //console.log(JSobj[update]["temperature"]);

    console.log(JSobj[update]["year"] + " " + JSobj[update]["month"] + " " + JSobj[update]["day"]);


    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [JSobj[update]["year"] + " " + JSobj[update]["month"] + " " + JSobj[update]["day"] +
                "--" + JSobj[update]["hour"] + ":" + JSobj[update]["minute"],
                JSobj[update - 1]["year"] + " " + JSobj[update - 1]["month"] + " " + JSobj[update - 1]["day"] +
                "--" + JSobj[update - 1]["hour"] + ":" + JSobj[update - 1]["minute"],
                JSobj[update - 2]["year"] + " " + JSobj[update - 2]["month"] + " " + JSobj[update - 2]["day"] +
                "--" + JSobj[update - 2]["hour"] + ":" + JSobj[update - 2]["minute"],
                JSobj[update - 3]["year"] + " " + JSobj[update - 3]["month"] + " " + JSobj[update - 3]["day"] +
                "--" + JSobj[update - 3]["hour"] + ":" + JSobj[update - 3]["minute"],
                JSobj[update - 4]["year"] + " " + JSobj[update - 4]["month"] + " " + JSobj[update - 4]["day"] +
                "--" + JSobj[update - 4]["hour"] + ":" + JSobj[update - 4]["minute"],
                JSobj[update - 5]["year"] + " " + JSobj[update - 5]["month"] + " " + JSobj[update - 5]["day"] +
                "--" + JSobj[update - 5]["hour"] + ":" + JSobj[update - 5]["minute"],
                JSobj[update - 6]["year"] + " " + JSobj[update - 6]["month"] + " " + JSobj[update - 6]["day"] +
                "--" + JSobj[update - 6]["hour"] + ":" + JSobj[update - 6]["minute"]
            ],
            datasets: [{
                label: 'temperature',
                data: [JSobj[update]["temperature"],
                    JSobj[update - 1]["temperature"],
                    JSobj[update - 2]["temperature"],
                    JSobj[update - 3]["temperature"],
                    JSobj[update - 4]["temperature"],
                    JSobj[update - 5]["temperature"],
                    JSobj[update - 6]["temperature"]
                ],
                borderColor: '#0000FF',
                fill: false
            }, {
                label: 'humidity',
                data: [JSobj[update]["humidity"],
                    JSobj[update - 1]["humidity"],
                    JSobj[update - 2]["humidity"],
                    JSobj[update - 3]["humidity"],
                    JSobj[update - 4]["humidity"],
                    JSobj[update - 5]["humidity"],
                    JSobj[update - 6]["humidity"]
                ],
                borderColor: '#FF0000',
                fill: false
            }]
        },
        options: {
            responsive: true
        }
    });
})