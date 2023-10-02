// imported ws library
var WebSocketServer = require('ws').Server;
//  WebSocketServer is listening on port :8895 
var ws = new WebSocketServer({port:8895});


ws.on('listening',function(){
    console.log(`server started with port 8895 http://localhost:${8895}`);
});



ws.on('connection',function(connection){
    console.log("user is connected");
    connection.send("hello from server");



    /*action to do when user send messages*/
    connection.on('message',function(message){
        console.log("message from user");
    });



    /*action to do when user try to close the connection*/
    connection.on('close',function(){
    console.log("disconnecting user");
    }); 


});