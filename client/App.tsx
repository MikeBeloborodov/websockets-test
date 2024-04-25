import React, { useState } from "react";

type TMessage = {
  name: string;
  message: string;
};

export const App = () => {
  const url = `ws://${process.env.URL}`;
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isChat, setIsChat] = useState<boolean>(false);
  const [websoket, setWebsoket] = useState<WebSocket | null>(null);
  const [serverMessages, setServerMessages] = useState<TMessage[]>([]);

  function connectToChat() {
    const websocket = new WebSocket(url);
    websocket.addEventListener("open", () => {
      alert("Connected to the chat!");
    });
    websocket.addEventListener("message", (message) => {
      const msg = JSON.parse(message.data);
      console.log(msg);
      setServerMessages((oldVals) => [...oldVals, msg]);
    });
    setWebsoket(websocket);
    setIsChat(true);
  }

  function onInput(e: React.ChangeEvent) {
    setMessage(e.target.nodeValue);
  }

  function assignName(e: React.ChangeEvent) {
    setName(e.target.nodeValue);
  }

  function sendMessage() {
    websoket.send(
      JSON.stringify({
        name,
        message,
      }),
    );
    setMessage("");
  }

  return (
    <>
      <h1>Welcome to the chat</h1>
      {isChat ? (
        <>
          <input
            type="text"
            value={message}
            onChange={onInput}
            placeholder="Enter a message"
          />
          <button onClick={sendMessage}>Send message</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={name}
            onChange={assignName}
            placeholder="Enter your name"
          />
          <button onClick={connectToChat}>Start</button>
        </>
      )}
      {serverMessages.length ? (
        serverMessages.map((message) => (
          <p>{message.name + ": " + message.message}</p>
        ))
      ) : (
        <h2>No new messages!</h2>
      )}
    </>
  );
};
