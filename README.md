# 🎬 MovieBook - Seat Booking App

MovieBook is a full-stack web application that allows users to view and book movie seats in real-time. Built with the MERN (MongoDB, Express.js, React, Node.js) stack, it handles seat availability, booking concurrency, and provides a smooth user experience with real-time feedback.

## 🚀 Features

- ✅ View all available and booked seats
- 🎫 Select and confirm seat bookings
- ⚠️ Prevents multiple users from booking the same seat simultaneously using **MongoDB Transactions**
- 🔐 Environment variables managed securely using `.env`
- 🔁 Seats displayed in sorted order
- 🔔 User feedback via **react-toastify**
- 📦 Backend and Frontend structured separately for scalability

---

## 📁 Folder Structure

```
moviebook/
│
├── backend/               # Node.js + Express + MongoDB backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env               # Environment variables
│   └── server.js
│
├── frontend/              # React frontend
│   ├── components/
│   ├── pages/
│   └── App.js
│
└── README.md
```

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, Axios, React-Toastify
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Database**: MongoDB (with transaction support)
- **Others**: Git, GitHub, dotenv, CORS

---

## ⚙️ How to Run Locally

### 🔧 1. Clone the repository

```bash
git clone https://github.com/sujit132004/moviebook.git
cd moviebook
```

### 📦 2. Install dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### 🔐 3. Set up `.env` in `backend/`

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### ▶️ 4. Start the app

#### Backend
```bash
npm run start
```

#### Frontend
```bash
npm run dev
```

App will run on: `http://localhost:5173`

---

## 📸 Screenshots

(Include some screenshots of UI here if possible)

---

## 📌 Concurrency Handling

- Booking routes are wrapped inside a MongoDB **session** and **transaction** to avoid race conditions.
- Only one user can book a seat at a time — others get a toast error message.

---

## 📨 Feedback

Feel free to raise an issue or suggest improvements!

---

## 👤 Author

**Sujit Kumar**  
[GitHub](https://github.com/sujit132004) | [LinkedIn](https://www.linkedin.com/in/your-link)

---

## ⭐ Star the repo if you liked it!
