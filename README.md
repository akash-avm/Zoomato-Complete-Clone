# Zomato Clone

A full-stack food ordering platform inspired by Zomato, featuring restaurant listings, cart management, secure authentication, online payments, and order management.

---

## Overview

This project is a complete Zomato-inspired food delivery platform built to simulate a real-world food ordering system.

Users can browse restaurants, explore menus, add products to cart, place orders, and complete payments through an integrated checkout system.

The platform includes both **frontend** and **backend** architecture with authentication, database integration, and admin management features.

---

## Features

### User Features

- User registration and login
- Restaurant and food listing
- Search and filter restaurants
- Product detail page
- Add to cart
- Checkout process
- Online payment integration
- Order tracking
- User profile management

### Admin Features

- Restaurant management
- Product management
- Order management
- Dashboard controls

---

## Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React.js |
| Backend | Node.js / Express.js |
| Database | MongoDB |
| Authentication | JWT |
| Payment | Razorpay / Stripe |
| State Management | Redux |
| Styling | CSS / Bootstrap |

---

## Project Structure

```txt
zomato-clone/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── config/
│
├── admin/
│
├── README.md
└── package.json
```

---

## Core Functionalities

### Authentication

Users can securely create accounts and log in using JWT-based authentication.

### Restaurant Browsing

Browse restaurants with menus, categories, ratings, and pricing.

### Cart System

Users can add multiple food items to cart and manage quantities before checkout.

### Payment System

Integrated payment workflow for placing orders securely.

### Order Management

Users can place orders and view order history.

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/zomato-clone.git

cd zomato-clone
```

---

### Install Dependencies

#### Frontend

```bash
cd Frontend

npm install

npm start
```

#### Backend

```bash
cd Backend

npm install

npm run server
```

#### Admin Panel

```bash
cd Admin

npm install

npm start
```

---

## Environment Variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_url

JWT_SECRET=your_secret_key

STRIPE_SECRET_KEY=your_payment_key
```

---

## Future Improvements

- Real-time order tracking
- Restaurant analytics
- Push notifications
- Recommendation system
- Dark mode support

---

## Author

Akash Yadav
