// connecting to the server
var ws = new WebSocket("ws://localhost:8895");

ws.onopen = function () {
    
    // web socket is connected, send datas to server
    ws.send("message from user");
    console.log("message send to server");
};


ws.onmessage = function (evt) {
    // handle message from server
    var recieved_msg = evt.data;
    alert("message from server = "+recieved_msg);
};


ws.onclose= function (){
    // websocket is closed

    console.log("websocket connection is closed... ");
};