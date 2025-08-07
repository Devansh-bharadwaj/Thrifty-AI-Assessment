import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function ChatBox({ userName }) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("newMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("sentimentUpdate", (data) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === data.id ? { ...msg, sentiment: data.sentiment } : msg
        )
      );
    });

    return () => {
      socket.off("newMessage");
      socket.off("sentimentUpdate");
    };
  }, []);

  const sendMessage = async () => {
    if (!text.trim()) return;

    const response = await fetch("http://localhost:5000/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: userName, text }),
    });

    setText("");
  };

  return (
    <div>
      <h4 className="mb-4">Hello, {userName}!</h4>
      <div
        className="chat-box mb-3 border rounded p-3"
        style={{ height: "400px", overflowY: "scroll" }}
      >
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-2">
            <strong>{msg.userId}:</strong> {msg.text}
            <span className="badge bg-secondary ms-2">
              {msg.sentiment || "Pending"}
            </span>
          </div>
        ))}
      </div>
      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="btn btn-success" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
