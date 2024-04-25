import { useState } from "react";

export const App = () => {
  const url = `ws://${process.env.URL}`;
  const [message, setMessage] = useState("");

  function connectToChat() {
    const websocket = new WebSocket(url);
    websocket.addEventListener("open", () => {
      websocket.send(
        JSON.stringify({
          message: "Hello server!",
          data: ["1", "2", "3", "4"],
          raw: { name: "alex" },
        }),
      );
    });
    websocket.addEventListener("message", (message) => {
      const msg = JSON.parse(message.data);
      console.log(msg);
    });
  }

  function onInput(e: React.ChangeEvent) {
    setMessage(e.target.nodeValue);
  }

  return (
    <>
      <h1>Welcome to the chat</h1>
      <input type="text" value={message} onChange={onInput} />
      <button onClick={connectToChat}>Start</button>
    </>
  );
};
