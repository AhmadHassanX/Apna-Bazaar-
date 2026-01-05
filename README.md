# Apna Bazaar – The Ultimate E-Commerce Platform

## 📌 Project Overview
**Apna Bazaar** is a comprehensive e-commerce solution that demonstrates full-stack development capabilities. This repository houses three distinct implementations of the platform, showcasing evolution from vanilla web technologies to modern frameworks.

### 🚀 1. Main Application (Deployed)
**Tech Stack:** `HTML5`, `CSS3`, `Vanilla JavaScript`, `Firebase Realtime Database`
**Status:** **Fully Functional & Deployed**
The core application currently served via `index.html`. It connects directly to a live Firebase database for real-time operations.

#### **Key Features & Contributors**
*   **Authentication & Vendor Portal** (Developed by **Ahmad Hassan / AhmadHassanX**)
    *   **Role-Based Access**: Distinct flows for `User` and `Vendor`.
    *   **Secure Login/Signup**: Session management via LocalStorage.
    *   **Vendor Dashboard**: Dedicated interface for vendors to Add, Edit, and Delete products (`vendersDashboard.html`).
*   **Shopping Experience** (Developed by **Nasir Ali / NasirXAli**)
    *   **Dynamic Cart**: Real-time addition/removal of items linked to user accounts (`cart.html`).
    *   **Checkout System**: Streamlined process for address and payment collection (`checkout.html`).
    *   **Smart Storefront**: Advanced filtering by Category, Price Range (`100-500`, etc.), and Rating.
    *   **Pagination**: Optimized product loading strategy.

### 💻 2. React Application (Modern V2)
**Location:** `/react-app`
**Tech Stack:** `React 19`, `Vite`, `Framer Motion`, `React Router v7`
A modern, component-based rewrite of the frontend focusing on performance and animations.
*   **Animations**: Powered by `framer-motion` for smooth UI transitions.
*   **Routing**: Client-side routing using `react-router-dom`.

### 🛠 3. Backend Service (SQL Alternative)
**Location:** `/backend`
**Tech Stack:** `Node.js`, `Express.js`, `MySQL`
A robust REST API designed to replace the Firebase backend for enterprise-grade data management.
*   **API Endpoints**:
    *   `GET /api/products` - SQL-based product retrieval.
    *   `POST /api/auth/signup` - Secure user registration.
    *   `POST /api/cart` - Server-side cart management.

---

## 📂 Repository Structure
```
Ecommerce Web/
├── index.html              # Main Entry Point (Vanilla App)
├── pages/                  # Frontend Views
│   ├── cart.html           # 🛒 Cart View
│   ├── checkout.html       # 💳 Checkout View
│   ├── log.html            # 🔑 Login View
│   ├── signup.html         # 📝 Registration View
│   └── vendersDashboard.html # 📊 Vendor Admin Panel
├── src/                    # Application Logic
│   ├── config.js           # API Configuration
│   ├── index.js            # Main Product Logic (Firebase Connected)
│   ├── cart.js             # Cart Managment Logic
│   └── venders.js          # Vendor Dashboard Logic
├── style/                  # CSS Stylesheets
├── react-app/              # ⚛️ React Version (Vite)
├── backend/                # 🔙 Node.js/Express API
└── README.md               # Project Documentation
```

## ⚙️ Setup Instructions

### For the Main App (Vanilla JS):
1.  **Clone the Repo:**
    ```bash
    git clone https://github.com/AhmadHassanX/Apna-Bazaar-.git
    ```
2.  **Run:** Open `index.html` in your browser (Live Server recommended).
3.  **Credentials:**
    *   **User:** `user@gmail.com` / `user123`
    *   **Vendor:** `nasirali@gmail.com` / `vendor123`

### For the React App:
```bash
cd react-app
npm install
npm run dev
```

### For the Backend API:
```bash
cd backend
npm install
node server.js
```

---
> **Collaboration Project**
> *   **Partner A (AhmadHassanX)**: Auth, Vendor System, Core Structure
> *   **Partner B (NasirXAli)**: Cart, Checkout, UI/UX Enhancements
