# Apna Bazaar – Multi-Vendor E-Commerce App

## Introduction
Apna Bazaar is a fully functional e-commerce web application designed for both vendors and customers. It allows vendors to manage product listings and customers to browse, filter, and purchase products. This project simulates the end-to-end shopping experience from signup/login to checkout. Built with a clean UI and interactive features, the application demonstrates key front-end development concepts and integrates Firebase Realtime Database for backend services. User authentication and session management are handled using local storage.

## Project Type
Frontend & Backend (Collaboration)

## Deployed App
Frontend: https://charming-moonbeam-632fe7.netlify.app/

## Team Members & Contributions
This project was built collaboratively by:

*   **Ahmad Hassan (AhmadHassanX)** - *Partner A*
    *   **Role**: Vendor Management & Authentication
    *   **Features**: User/Vendor Signup & Login, Vendor Dashboard (Add/Edit/Delete Products), Authentication Logic.

*   **Nasir Ali (NasirXAli)** - *Partner B*
    *   **Role**: Customer Experience & Shopping
    *   **Features**: Product Cart Management, Checkout Process, Cart UI/UX, Order Summary.

## Directory Structure
```
Ecommerce Web/
├── pages/
│   ├── cart.html          # (Partner B)
│   ├── checkout.html      # (Partner B)
│   ├── log.html           # (Partner A)
│   ├── signup.html        # (Partner A)
│   └── vendersDashboard.html # (Partner A)
├── src/
│   ├── cart.js            # (Partner B)
│   ├── checkout.js        # (Partner B)
│   ├── config.js
│   ├── index.js
│   ├── log.js             # (Partner A)
│   ├── signup.js          # (Partner A)
│   └── venders.js         # (Partner A)
├── style/
│   ├── cart.css           # (Partner B)
│   ├── checkout.css       # (Partner B)
│   ├── log.css            # (Partner A)
│   ├── signup.css         # (Partner A)
│   ├── style.css
│   └── vendersDashboard.css # (Partner A)
├── index.html
├── README.md
├── seed.ps1
└── seed_data.json
```

## Features
- **User and Vendor SignUp/Login** (AhmadHassanX)
- **Vendor dashboard** to manage products (AhmadHassanX)
- **Cart functionality** with item count (NasirXAli)
- **Checkout page** to collect address/payment (NasirXAli)
- Product listing with filtering
- Real-time product and cart data stored in Firebase Realtime Database
- **Database Seeding**: PowerShell script to populate dummy data

## Installation & Getting started
Clone the repository:
```bash
git clone https://github.com/AhmadHassanX/Apna-Bazaar-.git
cd Ecommerce_Web
# Open index.html using Live Server
```

## Credentials
**Vendor:**
- Email: nasirali@gmail.com
- Password: vendor123

**User:**
- Email: user@gmail.com
- Password: user123

## Technology Stack
- HTML, CSS, JavaScript
- Firebase Realtime Database
- Local Storage (for authentication)
- GitHub (Version Control for Collaboration)

---
> **Result of a Pair Programming Collaboration**
