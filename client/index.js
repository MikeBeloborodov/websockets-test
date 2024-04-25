const url = "ws://178.208.81.203:9000";
const websocket = new WebSocket(url);

websocket.addEventListener("open", () => {
  websocket.send("say hi to server!");
});
