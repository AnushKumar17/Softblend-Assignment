Softblend - Task and User Management Backend

This project is a simple backend application built using Node.js, Express, and MongoDB. It allows you to create and manage users and tasks through REST APIs.


<pre> ### 📁 Folder Structure ``` backend/ ├── models/ # Mongoose schemas for User and Task │ ├── User.js │ └── Tasks.js ├── routes/ # API route definitions │ ├── userRoutes.js │ └── taskRoutes.js ├── app.js # Main application file ├── .env # Environment variables ├── package.json # Project metadata and dependencies ``` </pre>
🚀 Features

👤 User APIs
- POST /users – Create a new user (name, email)
- GET /users/:id – Get user details by ID
- GET /users – Get list of all users
- 
✅ Task APIs
- POST /tasks – Create a new task (title, description, due date, status, assigned user)
- GET /tasks/:id – Get task details by ID
- GET /tasks – Get all tasks (can filter by status or user)
- PUT /tasks/:id – Update a task
- DELETE /tasks/:id – Delete a task

  
⚙️ Setup Instructions
1. Clone the Project
git clone <your-repo-url>
cd backend
2. Install Dependencies
npm install
3. Configure Environment Variables
Create a .env file inside the backend/ folder and add:

  MONGO_URI=<your-mongodb-connection-url>
  PORT=5000

4. Start the Server
node app.js

The server will run on http://localhost:5000.
🔍 Testing with Thunder Client

You can use Thunder Client (VS Code extension) to test these APIs. Example test requests include:
- POST /users with body { "name": "Alice", "email": "alice@example.com" }
- POST /tasks with body containing assignedUserId from a created user


🧱 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv


📌 Note
All route logic is written directly inside the route files. There are no separate controller files. This backend is ideal for learning basic CRUD operations with REST APIs and MongoDB.
├── .gitignore        # Git ignore file for node_modules and .env
.gitignore Details
A `.gitignore` file is added to the project to exclude the following sensitive or unnecessary files from version control:

- `node_modules/`: Contains installed dependencies. It is large and can be regenerated using `npm install`.
- `.env`: Stores environment variables such as database URIs and ports. It should be kept private and not pushed to repositories.
