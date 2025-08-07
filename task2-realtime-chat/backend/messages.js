let messages = [];

function addMessage(userId, text) {
  const id = Date.now().toString();
  const message = { id, userId, text, sentiment: "Pending" };
  messages.push(message);
  return message;
}

function updateSentiment(id, sentiment) {
  const index = messages.findIndex((m) => m.id === id);
  if (index !== -1) {
    messages[index].sentiment = sentiment;
    return messages[index];
  }
  return null;
}

module.exports = { addMessage, updateSentiment };
