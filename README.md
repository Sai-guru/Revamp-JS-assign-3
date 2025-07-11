# 🥓 Bacon Ipsum API - Minimal Express Setup

A simple Node.js project using Express to fetch data from the Bacon Ipsum API with environment variables and modular routing.

---

## 📁 Folder Structure
.
├── routes.js # Contains GET /bacon route
├── server.js # Main Express server setup
├── .env # Environment variables (not committed)
└── README.md
---
## 🔐 .env File

```env
PORT=4000
SOURCE_URL=https://baconipsum.com
📦 Libraries Used
express — Web framework
axios — For HTTP requests
dotenv — To load environment variables from .env

Install them using: npm install express axios dotenv
🧪 API Endpoint
GET /api/bacon → Fetches text from Bacon Ipsum API
| Method | Endpoint     | Description                           |
| ------ | ------------ | ------------------------------------- |
| GET    | `/api/bacon` | Fetches random Bacon Ipsum paragraphs |


