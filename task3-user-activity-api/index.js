const express = require("express");
const cors = require("cors");
const {
  logActivity,
  getLastActivities,
  getActivitySummary,
} = require("./activityStore");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;

app.post("/activity", (req, res) => {
  try {
    const { userId, action } = req.body;

    if (!userId || !action) {
      return res
        .status(400)
        .json({ error: "Both 'userId' and 'action' are required." });
    }

    const newActivity = logActivity(userId, action);
    res.status(201).json(newActivity);
  } catch (err) {
    next(err);
  }
});

app.get("/activity/:userId", (req, res) => {
  try {
    const userId = req.params.userId;

    if (!userId) {
      return res.status(400).json({ error: "userId is required in params." });
    }

    const data = getLastActivities(userId);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

app.get("/activity/:userId/summary", (req, res) => {
  try {
    const userId = req.params.userId;

    if (!userId) {
      return res.status(400).json({ error: "userId is required in params." });
    }

    const summary = getActivitySummary(userId);
    res.json(summary);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
