import React, { useState } from "react";

function JoinChat({ setUserName }) {
  const [name, setName] = useState("");

  const handleJoin = () => {
    if (name.trim()) {
      setUserName(name.trim());
    }
  };

  return (
    <div className="text-center mt-5">
      <h3>Join the Chat</h3>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleJoin}>
        Join
      </button>
    </div>
  );
}

export default JoinChat;
