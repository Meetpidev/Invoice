# 🧾 EasyInvoice — MERN Invoice Management System

<div align="center">

![EasyInvoice Banner](https://img.shields.io/badge/EasyInvoice-Invoice%20Management-6366f1?style=for-the-badge&logo=receipt&logoColor=white)

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

**A full-stack invoice management system with payment integration, PDF generation, and real-time dashboards.**

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Database Models](#-database-models)
- [API Endpoints](#-api-endpoints)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Pages & Routes](#-pages--routes)
- [Screenshots](#-screenshots)

---

## 🌟 Overview

**EasyInvoice** is a modern, full-stack Invoice Management System built with the **MERN stack**. It enables businesses to manage their entire invoicing workflow — from creating professional invoices and tracking customers to collecting payments via **Razorpay** and generating **PDF documents**.

The application includes a **Landing Page**, **Authentication (JWT-based)**, a **Dashboard with analytics**, and protected routes for managing Invoices, Customers, Products, and Business Profiles.

---

## ✨ Features

### 🔐 Authentication & Security
- JWT-based authentication with protected routes
- Secure password hashing using **bcryptjs**
- Helmet.js for HTTP security headers
- CORS protection & Morgan request logging

### 📊 Dashboard & Analytics
- Real-time revenue & invoice statistics
- Payment status breakdown (Paid, Pending, Overdue)
- Interactive charts powered by **Recharts**

### 🧾 Invoice Management
- Create, view, update, and delete invoices
- Multi-item invoice with automatic total calculation
- Invoice status tracking (Draft, Sent, Paid, Overdue, Cancelled)
- **PDF Generation** using **PDFKit**
- Due date tracking and notifications

### 👥 Customer Management
- Add, edit, and delete customers
- Associate customers with invoices
- Customer contact & billing address management

### 📦 Product / Service Management
- Manage a product/service catalog with pricing
- Reusable products when creating invoices

### 💳 Payment Integration
- **Razorpay** payment gateway integration
- Track payment status per invoice
- Payment history and records

### 🏢 Business Profile
- Configure business name, address, logo, and tax info
- Business profile shown on generated invoices

### 💰 Pricing Plans
- Tiered subscription plans page
- Plan comparison and feature breakdown

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Express.js** | REST API framework |
| **MongoDB + Mongoose** | Database & ODM |
| **JWT** | Authentication tokens |
| **bcryptjs** | Password hashing |
| **PDFKit** | Invoice PDF generation |
| **Razorpay** | Payment gateway |
| **Helmet** | HTTP security headers |
| **Morgan** | HTTP request logger |
| **dotenv** | Environment configuration |
| **CORS** | Cross-origin resource sharing |

### Frontend
| Technology | Purpose |
|---|---|
| **React 18** | UI library |
| **Vite** | Build tool & dev server |
| **React Router DOM v6** | Client-side routing |
| **Tailwind CSS** | Utility-first styling |
| **Recharts** | Data visualization charts |
| **Axios** | HTTP client |
| **Formik + Yup** | Form handling & validation |
| **Lucide React** | Icon library |
| **React Hot Toast** | Toast notifications |
| **date-fns** | Date formatting |

---

## 📁 Project Structure

```
Invoice/
├── backend/
│   ├── server.js             # Entry point — DB connection & server start
│   ├── package.json
│   ├── .env                  # Environment variables
│   └── src/
│       ├── app.js            # Express app setup, middleware & routes
│       ├── middlewares/
│       │   └── auth.middleware.js    # JWT authentication middleware
│       ├── models/
│       │   ├── User.js
│       │   ├── Invoice.js
│       │   ├── Customer.js
│       │   ├── Product.js
│       │   ├── Payment.js
│       │   ├── BusinessProfile.js
│       │   └── Settings.js
│       ├── routes/
│       │   ├── auth.routes.js
│       │   ├── invoice.routes.js
│       │   ├── customer.routes.js
│       │   ├── product.routes.js
│       │   ├── payment.routes.js
│       │   ├── dashboard.routes.js
│       │   └── business.routes.js
│       └── utils/            # Utility helpers
│
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    ├── package.json
    └── src/
        ├── main.jsx          # React entry point
        ├── App.jsx           # Routes & protected route logic
        ├── index.css         # Global styles
        ├── assets/           # Static assets
        ├── components/       # Reusable UI components
        ├── context/
        │   └── AuthContext.jsx  # Global auth state
        ├── layouts/
        │   └── MainLayout.jsx   # Sidebar + header layout
        ├── pages/
        │   ├── LandingPage.jsx
        │   ├── Login.jsx
        │   ├── Register.jsx
        │   ├── Dashboard.jsx
        │   ├── Invoices.jsx
        │   ├── CreateInvoice.jsx
        │   ├── Customers.jsx
        │   ├── Products.jsx
        │   ├── BusinessProfile.jsx
        │   └── Pricing.jsx
        └── services/         # Axios API service calls
```

---

## 🗄️ Database Models

| Model | Description |
|---|---|
| `User` | Stores user credentials and authentication data |
| `Invoice` | Invoice records with items, totals, and status |
| `Customer` | Customer details: name, email, phone, address |
| `Product` | Product/service catalog with pricing |
| `Payment` | Payment records linked to invoices (Razorpay) |
| `BusinessProfile` | Business info used on invoices (name, address, tax) |
| `Settings` | Per-user app preferences and configuration |

---

## 🔌 API Endpoints

### Auth — `/api/auth`
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/register` | Register a new user |
| `POST` | `/login` | User login & get JWT |

### Invoices — `/api/invoices`
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Get all invoices |
| `POST` | `/` | Create a new invoice |
| `GET` | `/:id` | Get invoice by ID |
| `PUT` | `/:id` | Update an invoice |
| `DELETE` | `/:id` | Delete an invoice |
| `GET` | `/:id/pdf` | Download invoice as PDF |

### Customers — `/api/customers`
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Get all customers |
| `POST` | `/` | Add a new customer |
| `PUT` | `/:id` | Update customer |
| `DELETE` | `/:id` | Delete customer |

### Products — `/api/products`
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Get all products |
| `POST` | `/` | Add a new product |
| `PUT` | `/:id` | Update product |
| `DELETE` | `/:id` | Delete product |

### Payments — `/api/payments`
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/create-order` | Create Razorpay payment order |
| `POST` | `/verify` | Verify payment signature |
| `GET` | `/` | Get payment history |

### Dashboard — `/api/dashboard`
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/stats` | Get revenue & invoice stats |
| `GET` | `/recent` | Get recent invoices & activity |

### Business — `/api/business`
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Get business profile |
| `POST` | `/` | Create/update business profile |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** v18+
- **npm** v9+
- **MongoDB** (local or MongoDB Atlas)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/easyinvoice.git
cd easyinvoice
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory (see [Environment Variables](#-environment-variables)).

```bash
# Start development server
npm run dev
```

The backend will start at **http://localhost:5000**

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

```bash
# Start development server
npm run dev
```

The frontend will start at **http://localhost:5173**

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend/` directory with the following variables:

```env
# Server
PORT=5000

# MongoDB
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?appName=Cluster0

# JWT
JWT_SECRET=your_super_secret_jwt_key

# Razorpay
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

> ⚠️ **Never commit your `.env` file to version control.** It is already added to `.gitignore`.

---

## 🗺️ Pages & Routes

| Route | Page | Access |
|---|---|---|
| `/` | Landing Page | Public |
| `/sign-in` | Login | Public |
| `/register` | Register | Public |
| `/dashboard` | Dashboard & Analytics | 🔒 Protected |
| `/invoices` | Invoice List | 🔒 Protected |
| `/invoices/create` | Create Invoice | 🔒 Protected |
| `/customers` | Customers | 🔒 Protected |
| `/products` | Products / Services | 🔒 Protected |
| `/profile` | Business Profile | 🔒 Protected |
| `/pricing` | Pricing Plans | 🔒 Protected |

---

## 🧩 Key Components

- **`AuthContext`** — Global authentication state with JWT token management
- **`MainLayout`** — Persistent sidebar and top navigation for authenticated views
- **`ProtectedRoute`** — HOC that redirects unauthenticated users to `/sign-in`
- **`Spinner`** — Loading state while auth context resolves

---

## 📜 Available Scripts

### Backend
```bash
npm run dev    # Start with nodemon (hot reload)
npm start      # Start in production mode
```

### Frontend
```bash
npm run dev      # Vite dev server with HMR
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint check
```

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">

Made with  using the **MERN Stack**

⭐ Star this repo if you found it helpful!

</div>
