## 📝 Backend (Node/Express) – `README.md`

# Backend (Node/Express)

This is the backend server built with **Node.js + Express.js**.  
It provides REST APIs for authentication, user data management, and integrates with Google OAuth 2.0.

---

## 🚀 Features
- Node.js + Express.js
- MongoDB (Mongoose)
- Google OAuth 2.0 Authentication
- JWT / Session handling
- REST API endpoints for frontend

---
## 🚀 Deployment

The backend is deployed on **Render** and can be accessed at:  
👉 [https://backend-note-taking-application.onrender.com](https://backend-note-taking-application.onrender.com)

---

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/krishna3032004/backend-note-taking-application.git
   cd backend

2. Install dependencies:
   ```bash
   npm install

3. Create a .env file in the frontend folder and add:
   ```bash
   REACT_APP_BACKEND_URL=http://localhost:5000

4. Run the development server:
   ```bash
   npm start

## 🔑 Environment Variables

Make a `.env` file in the backend root directory and add the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback
JWT_SECRET=your_jwt_secret