const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { addMessage, updateSentiment } = require("./messages");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.use(express.json());

const PORT = 5000;

io.on("connection", (socket) => {
  console.log("Client connected");
});

app.post("/message", (req, res) => {
  const { userId, text } = req.body;

  if (!userId || !text) {
    return res.status(400).json({ error: "userId and text are required" });
  }

  const newMessage = addMessage(userId, text);

  io.emit("newMessage", newMessage);

  setTimeout(() => {
    const sentiment = analyzeSentiment(text);
    const updated = updateSentiment(newMessage.id, sentiment);

    if (updated) {
      io.emit("sentimentUpdate", {
        id: updated.id,
        sentiment: updated.sentiment,
      });
    }
  }, 3000);

  res.status(200).json({ status: "Message sent" });
});

function analyzeSentiment(text) {
  const positiveWords = ["happy", "love", "great"];
  const negativeWords = ["sad", "angry", "bad"];

  const lowercaseText = text.toLowerCase();

  if (positiveWords.some((w) => lowercaseText.includes(w))) return "Positive";
  if (negativeWords.some((w) => lowercaseText.includes(w))) return "Negative";
  return "Neutral";
}

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
