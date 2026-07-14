# 📝 NoteFlow

A secure full-stack Notes Management Platform built with the **MERN Stack**, featuring **JWT Authentication**, **Protected REST APIs**, and **User-Specific CRUD Operations**.

---

## 🚀 Live Demo

🌐 **Live Application:**  
https://noteflow-wine.vercel.app

📂 **Source Code:**  
https://github.com/TusharGupta-008/NoteFlow

---

---

## 📸 Screenshots

### Login Page

_Add Screenshot Here_

---

### Dashboard

_Add Screenshot Here_

---

### Create Note

_Add Screenshot Here_

---

### Edit Note

_Add Screenshot Here_

---

## ✨ Features

- 🔐 Secure JWT Authentication
- 🛡️ Protected Routes & Authorization Middleware
- 👤 User-Specific Notes Management
- 📝 Create, Read, Update & Delete Notes (CRUD)
- ✏️ Edit Existing Notes
- ⚡ RESTful API Architecture
- 🔄 Real-Time Frontend & Backend Integration using Axios
- 📱 Responsive User Interface
- ☁️ Cloud Deployment using Vercel & Render

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React.js, React Router DOM, Axios, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, bcryptjs |
| Deployment | Vercel, Render |

---

## 📂 Project Structure

```text
NoteFlow
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── db
│   └── index.js
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── assets
│   │   └── App.jsx
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Architecture

```text
React.js
     │
     ▼
Axios HTTP Requests
     │
     ▼
Express REST APIs
     │
     ▼
JWT Authentication Middleware
     │
     ▼
MongoDB Atlas
```

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/signup` |
| POST | `/api/login` |

### Notes

| Method | Endpoint |
|---------|----------|
| GET | `/api/notes/get` |
| GET | `/api/notes/:id` |
| POST | `/api/notes/create` |
| PUT | `/api/notes/update/:id` |
| DELETE | `/api/notes/delete/:id` |


## 🔧 Installation

Clone the repository

```bash
git clone https://github.com/TusharGupta-008/NoteFlow.git
```

Move into the project

```bash
cd NoteFlow
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend (.env)

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

CLIENT_URL=http://localhost:5173
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
```

---

## 💡 Key Highlights

- Built using the MERN Stack.
- Implemented JWT-based authentication and authorization.
- Designed RESTful APIs following industry-standard practices.
- Secured user-specific data using authentication middleware.
- Performed complete CRUD operations with MongoDB.
- Integrated React frontend with Express backend using Axios.
- Deployed the frontend on **Vercel** and backend on **Render**.

---

## 🚀 Future Enhancements

- 🔍 Search Notes
- 📌 Pin Important Notes
- 🏷️ Categories & Tags
- 🌙 Dark Mode
- 📅 Reminder Support
- 📝 Rich Text Editor

---

## 👨‍💻 Author

**Tushar Gupta**

GitHub:  
https://github.com/TusharGupta-008

LinkedIn:  
https://www.linkedin.com/in/tushar-gupta-91791627a/

---

⭐ If you found this project helpful, consider giving it a **Star**.
