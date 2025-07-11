
# 🥓 Bacon Ipsum API - Minimal Express Setup 🚀

A simple Node.js project using Express to fetch data from the Bacon Ipsum API with environment variables and modular routing. This setup prioritizes clarity and ease of use, getting you up and running with a basic API endpoint quickly! 🌟

---

## 🚀 Getting Started

Follow these steps to get your Bacon Ipsum API running locally.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1.  **Clone the repository** (or create the files manually if preferred):
    ```bash
    git clone <your-repo-url>
    cd <your-project-folder>
    ```
2.  **Install the dependencies**:
    ```bash
    npm install express axios dotenv
    ```

---

## 📁 Folder Structure 🌲

This project uses a clean and straightforward folder structure:

````

.
├── routes.js      \# Contains the GET /api/bacon route definition 🛣️
├── server.js      \# Main Express server setup and entry point ⚙️
├── .env           \# Environment variables (DO NOT commit this file to VCS\!) 🔒
└── README.md      \# This file providing project information 📝

````

---

## 🔐 Environment Variables (`.env`)

Create a file named `.env` in the root of your project. This file will hold your environment-specific variables, keeping sensitive information out of your codebase.

**Example `.env` file:**

```env
PORT=4000
SOURCE_URL=[https://baconipsum.com/api/?type=all-meat&paras=2&format=json](https://baconipsum.com/api/?type=all-meat&paras=2&format=json)
````

***Note:** The `SOURCE_URL` can be customized\! The example above fetches two paragraphs of 'all-meat' type in JSON format. You can adjust `type`, `paras`, and `format` according to the [Bacon Ipsum API documentation](https://baconipsum.com/api/) to get different results.*

-----

## 📦 Libraries Used 📚

This project leverages a few essential npm packages:

  * **`express`**: A fast, unopinionated, minimalist web framework for Node.js. 🌐
  * **`axios`**: A promise-based HTTP client for the browser and Node.js, used for making requests to the Bacon Ipsum API. 📡
  * **`dotenv`**: Loads environment variables from a `.env` file into `process.env`. 🔑

-----

## 🧪 API Endpoint

Once the server is running, you can access the following endpoint:

### `GET /api/bacon` → Fetches text from Bacon Ipsum API 🐷

| Method | Endpoint | Description |
| :----- | :------- | :------------------------------------ |
| `GET` | `/api/bacon` | Fetches random Bacon Ipsum paragraphs based on your `SOURCE_URL` configuration. 📜 |

**Example Response (JSON):**

```json
[
  "Bacon ipsum dolor amet spare ribs shoulder doner.",
  "Tail cupim biltong picanha ribeye pork belly."
]
```

-----

## ▶️ Running the Server

To start your Express server, run:

```bash
node server.js
```

Or, if you prefer to use `nodemon` for automatic restarts during development (install it globally first with `npm install -g nodemon`):

```bash
nodemon server.js
```

Once running, you should see a message in your console indicating which port the server is listening on (e.g., `Server listening on port 4000`).

Now, open your browser or use a tool like Postman/Insomnia and navigate to `http://localhost:4000/api/bacon` to see the bacon ipsum goodness\! 🚀

-----

```
```
