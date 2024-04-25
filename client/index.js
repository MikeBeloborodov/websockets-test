const url = "wss://178.208.81.203:9000";
const websocket = new WebSocket(url);

console.log(websocket.readyState);

websocket.addEventListener("open", () => {
  websocket.send("say hi to server!");
});

websocket.close(1000, "connection closed!");
