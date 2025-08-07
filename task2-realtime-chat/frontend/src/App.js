import React, { useState } from "react";
import JoinChat from "./components/JoinChat";
import ChatBox from "./components/ChatBox";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <div className="container py-4">
      {!userName ? (
        <JoinChat setUserName={setUserName} />
      ) : (
        <ChatBox userName={userName} />
      )}
    </div>
  );
}

export default App;
