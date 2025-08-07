# 🧩 Task 3 – User Activity Tracking API

A simple RESTful API built with **Node.js + Express** to log and retrieve user activities.

---

## 📌 Features

✅ POST `/activity`  
→ Logs a user action with timestamp

✅ GET `/activity/:userId`  
→ Returns the **last 10 actions** of a user

✅ GET `/activity/:userId/summary`  
→ Returns a **summary (count)** of each action type by the user

---

## 🚀 Tech Stack

- Node.js
- Express.js
- In-memory storage (array)
- No database used (as per assessment requirement)

---

## ⚙️ Setup & Run Locally

1. **Go to project directory:**

````bash
cd task3-user-activity-api

2. **Run these commands:**
```bash
- npm install
- node index.js

````
