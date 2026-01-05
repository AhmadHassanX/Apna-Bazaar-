# Apna Bazaar – Multi-Vendor E-Commerce App

## Introduction
Apna Bazaar is a fully functional e-commerce web application designed for both vendors and customers. It allows vendors to manage product listings and customers to browse, filter, and purchase products. This project simulates the end-to-end shopping experience from signup/login to checkout. Built with a clean UI and interactive features, the application demonstrates key front-end development concepts and integrates Firebase Realtime Database for backend services. User authentication and session management are handled using local storage.

## Project Type
Frontend

## Deployed App
Frontend: https://charming-moonbeam-632fe7.netlify.app/

## Directory Structure
```
Ecommerce Web/
├── pages/
│   ├── cart.html
│   ├── checkout.html
│   ├── log.html
│   ├── signup.html
│   └── vendersDashboard.html
├── src/
│   ├── cart.js
│   ├── checkout.js
│   ├── config.js
│   ├── index.js
│   ├── log.js
│   ├── signup.js
│   └── venders.js
├── style/
│   ├── cart.css
│   ├── checkout.css
│   ├── log.css
│   ├── signup.css
│   ├── style.css
│   └── vendersDashboard.css
├── index.html
├── README.md
├── seed.ps1
└── seed_data.json
```

<img width="1366" height="768" alt="Screenshot (569)" src="https://github.com/user-attachments/assets/8bb5bead-966a-4f52-bbea-3dcf51a01a48" />
<img width="1366" height="768" alt="Screenshot (570)" src="https://github.com/user-attachments/assets/0787e34f-e11e-43e0-bd37-89fa1fbe5eb9" />
<img width="1366" height="768" alt="Screenshot (571)" src="https://github.com/user-attachments/assets/aee6152e-78c0-4253-9af6-8323f1efad9b" />


## Video Walkthrough of the project
[YouTube Link to Project Demo (1-3 mins)](https://drive.google.com/file/d/15FHqQjZ-Jlb4ECNNo9rd-j7byYeW7aUj/view?usp=sharing)

## Video Walkthrough of the codebase
[YouTube Link to Codebase Explanation (1-5 mins)](https://drive.google.com/file/d/15FHqQjZ-Jlb4ECNNo9rd-j7byYeW7aUj/view?usp=sharing)

## Features
- User and Vendor SignUp/Login using local storage
- Vendor dashboard to manage products (Add/Edit/Delete)
- Product listing with filtering by category, price, and rating
- Cart functionality with item count
- Responsive design with sticky navbar and pagination
- Checkout page to collect address and payment details
- Real-time product and cart data stored in Firebase Realtime Database
- **Centralized Configuration**: Easy database switching via `src/config.js`
- **Database Seeding**: PowerShell script to populate dummy data

## Design Decisions or Assumptions
- Firebase Realtime Database was chosen for simplicity and real-time capabilities
- Local storage used for authentication instead of Firebase Auth
- Role-based navigation: vendors access dashboard, users browse and shop
- Minimal and user-friendly UI focused on functionality

## Installation & Getting started
Clone the repository and run using any local live server extension:
```bash
git clone <your-repo-url>
cd Ecommerce_Web
# Open index.html using Live Server
```

## Configuration
To change the Firebase Database URL:
1. Open `src/config.js`.
2. Update the `API_URL` variable with your new Firebase URL.

## Database Seeding
To populate the database with dummy products:
1. Ensure you have PowerShell installed.
2. Run the seeding script:
```bash
powershell -ExecutionPolicy Bypass -File seed.ps1
```

## Usage
1. Go to Signup page and register as User or Vendor
2. Login to get redirected based on your role
3. Browse products, add to cart
4. Checkout and fill your details to complete the order

## Credentials
Vendor:
- Name: Nasir Ali
- Email: nasirali@gmail.com
- Password: vendor123

User:
- Email: user@gmail.com
- Password: user123

## APIs Used
- Firebase Realtime Database

## API Endpoints
- `https://apna-bazaar-84ee4-default-rtdb.firebaseio.com/Product.json` - Products API
- `https://apna-bazaar-84ee4-default-rtdb.firebaseio.com/Cart.json` - Cart API

## Technology Stack
- HTML, CSS, JavaScript
- Firebase Realtime Database
- Local Storage (for authentication)
- Netlify (Deployment)
- GitHub (Version Control)

## Collaboration & Timeline
- This project was completed in 4 days.
- Tools used: GitHub (version control & collaboration), Zoom (video presentation)

---
> Built by Sachin Kumanache
