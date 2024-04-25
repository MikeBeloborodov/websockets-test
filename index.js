"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws = require("ws");
var wsServer = new ws.Server({ port: 9000 });
wsServer.on("connection", function (wsClient) {
    console.log("New user");
    wsClient.send("Hello!");
    wsClient.on("message", function (message) {
        var msg = JSON.parse(message);
        console.log(msg);
        wsServer.clients.forEach(function (client) {
            client.send(message);
        });
    });
    wsClient.on("close", function () {
        console.log("User logout");
    });
});
console.log("Server is working on port 9000");
