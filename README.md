# 🎓 Edu-Flow - Professional Learning Management System

**Edu-Flow** is a modern, full-stack Learning Management System (LMS) designed to bridge the gap between instructors and students. It features a robust dashboard, secure authentication, and a seamless learning experience.

---

## 🚀 Live Demo
- **Frontend:** [https://eduflow-iota.vercel.app]
- **Backend API:** [https://eduflow-eta.vercel.app]

---

## ✨ Features

### 🔐 Authentication & Authorization
- **Secure Login/Register:** JWT-based authentication with cookie-supported persistence.
- **Role-Based Access Control (RBAC):** Distinct dashboards and routes for **Admin** and **User**.
- **Private Routes:** Protected dashboard access to prevent unauthorized entry.

### 🖥️ User Dashboard
- **My Learning:** Track enrolled courses.
- **Profile Management:** View and update user profile information.
- **Responsive Sidebar:** Collapsible sidebar for a cleaner UI on all devices.

### 🛠️ Admin Panel
- **User Management:** Manage all registered users.
- **Course Management:** Add, edit, or remove courses from the platform.
- **Statistics:** Real-time overview of the platform's performance.

---

## 🛠️ Tech Stack

### Frontend
- **React 18** (Vite)
- **Redux Toolkit** (State Management)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **React Router Dom v6** (Routing)

### Backend
- **Node.js & Express**
- **MongoDB** (Mongoose ODM)
- **JWT** (Security)

---

## 📁 Project Structure (Monorepo)

```text
Edu-Flow/
├── client/          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   └── pages/
│   └── package.json
├── server/          # Backend (Node.js + Express)
│   ├── models/
│   ├── routes/
│   └── package.json
└── README.md
