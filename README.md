# Apna Bazaar – Multi-Vendor E-Commerce Platform

## 📌 Project Overview
**Apna Bazaar** is a full-stack e-commerce application designed to simulate a real-world shopping environment. This project features a dual-interface system for Vendors and Customers, powered by a robust **MySQL database** (hosted via XAMPP) and a **Node.js/Express** backend.

### 🏛 Architecture
The application is built using a classic 3-tier architecture:
1.  **Frontend**: HTML5, CSS3, Vanilla JavaScript (Client-side logic).
2.  **Backend API**: Node.js & Express.js (RESTful API).
3.  **Database**: MySQL (Managed via XAMPP/phpMyAdmin).

---

## 👥 Team & Contributions
This project is a collaborative effort between two developers:

*   **Ahmad Hassan (AhmadHassanX)** - *Partner A*
    *   **Focus**: Vendor & User Management
    *   **Key Contributions**:
        *   Secure Authentication System (Login/Signup).
        *   Vendor Dashboard for CRUD operations (Add/Update/Delete Products).
        *   Backend API routes for Auth and Products.

*   **Nasir Ali (NasirXAli)** - *Partner B*
    *   **Focus**: Shopping Experience & Transaction
    *   **Key Contributions**:
        *   Shopping Cart module (Add/Remove items, Real-time calculations).
        *   Checkout & Payment Interface.
        *   Frontend Integration with Cart API.

---

## � Features
- **Role-Based Access**: Specialized views for Customers vs. Vendors.
- **Dynamic Product Management**: Vendors can manage inventory directly through the dashboard.
- **Smart Shopping Cart**: Persists items and calculates totals dynamically.
- **Advanced Search & Filter**: Filter products by Category, Price Range, and Star Rating.
- **Secure Data Storage**: All user and product data is stored in a relational MySQL database.

---

## 🛠 Technology Stack
*   **Frontend**: HTML, CSS, JavaScript
*   **Backend**: Node.js, Express.js
*   **Database**: MySQL (XAMPP)
*   **Version Control**: Git & GitHub

---

## ⚙️ Installation & Setup

### Prerequisites
1.  **XAMPP** Installed (for MySQL Database).
2.  **Node.js** Installed.

### Step 1: Database Setup
1.  Open **XAMPP Control Panel** and start **Apache** and **MySQL**.
2.  Go to `http://localhost/phpmyadmin`.
3.  Create a new database named `ecommerce_db`.
4.  Import the provided SQL schema (if available) or run the migration script.

### Step 2: Backend Setup
1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    node server.js
    ```
    *(Server runs on http://localhost:3000)*

### Step 3: Run the Application
1.  Go back to the root folder.
2.  Open `index.html` using a Live Server or directly in your browser.

---
> **Collaboration Project**
