# 🧠 Thrifty AI - Full Stack Coding Assessment

This repository contains solutions to the **Full Stack Coding Assessment** for **Thrifty AI**, including:

- ✅ DSA Problem (Longest Palindromic Substring)
- ✅ Real-Time Chat App (Socket.io + Sentiment Analysis)
- ✅ User Activity Tracking API

---

## 📁 Folder Structure

THRIFTY-AI-ASSESSMENT/
│
├── task1-longest-palindrome/ → DSA: Longest Palindromic Substring
│
├── task2-realtime-chat/ → Real-Time Chat App with Sentiment
│ ├── frontend/ → React.js + Bootstrap
│ └── backend/ → Node.js + Express + Socket.io
│
├── task3-user-activity-api/ → REST API for User Activity Tracking
│
└── README.md → This file


---

## ✅ Task 1 – Longest Palindromic Substring

🔸 **Tech Used:** JavaScript  
🔸 **Approach:** Expand Around Center (O(n²) Time, O(1) Space)

📂 Source: [`task1-longest-palindrome/longestPalindrome.js`](./task1-longest-palindrome/longestPalindrome.js)

---

## ✅ Task 2 – Real-Time Chat App with Sentiment Processing

### 🧩 Features:
- Real-time chat using **Socket.io**
- Messages initially appear with `"Pending"` sentiment
- Sentiment auto-updates after 3 seconds based on keyword match:
  - `"happy"`, `"love"`, `"great"` → Positive
  - `"sad"`, `"angry"`, `"bad"` → Negative
  - Otherwise → Neutral

### ⚙️ Tech Stack:
- Frontend: **React.js**, Bootstrap, Socket.io-client
- Backend: **Node.js**, Express, Socket.io
- Storage: In-memory

📂 Frontend: [`task2-realtime-chat/frontend`](./task2-realtime-chat/frontend)  
📂 Backend: [`task2-realtime-chat/backend`](./task2-realtime-chat/backend)

---

## ✅ Task 3 – User Activity Tracking API

### 🧩 Features:
- Log user actions (login, click, upload, etc.)
- Retrieve **last 10 activities**
- Retrieve **summary count** per action

### ⚙️ Tech Stack:
- Node.js
- Express
- In-memory storage

📂 Code: [`task3-user-activity-api`](./task3-user-activity-api)

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Devansh-bharadwaj/Thrifty-AI-Assessment.git
cd thrifty-ai-assessment
npm install
node index.js
