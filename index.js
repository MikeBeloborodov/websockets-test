const WebSocket = require("ws");

const wsServer = new WebSocket.Server({ port: 9000 });

wsServer.on("connection", (wsClient) => {
  console.log("New user");
  wsClient.send("Hello!");
  wsClient.on("message", (message) => {
    console.log(message);
  });
  wsClient.on("close", () => {
    console.log("User logout");
  });
});

console.log("Server is working on port 9000");
