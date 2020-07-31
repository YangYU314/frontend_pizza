<!-- <p align="center">
 <img width=150px height=150px src="./public/pizza.png" alt="Pizza logo"></a>
</p> -->
![Pizza logo](./public/pizza.png)

## Online Pizza Order Website
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

---
🍕 A fully-functional online pizza ordering website built with **React.js**, **Koa.js** and **MongoDB**, containing customer page for customers and admin page for administrators.

## 📝 Table of Contents

- About
- Demo
- How it works
- Getting Started
- Authors

## 🧐 About

An online pizza order website (like Domino Pizza) with the functionalities allowing customers to register, login, logout, select items and checkout and administrators to review orders.

## 🎥 Demo

### Demo Website:
- frontend: https://idea-tree-pizza-frontend.vercel.app/
- backend: https://idea-pizza-backend.herokuapp.com/
- Demo Username: Allen123@gmail.com
- Demo Passwords: Allen123@

### 📀 Select a Pizza
![](./public/select.png)

### 💿 Login or Register 
![](./public/customer-login.png)

![](./public/register.png)

### 💽 Fill up Address
![](./public/delivery-info.png)

### 💿 Checkout orders
![](./public/receipt.png)
![](./public/checkout.png)

## 💭 How it works
- Built readable, maintainable, reusable front-end components via `React.js`, `Redux` and `React-Hooks`.
- Used `React-Router` to ensure the Single-Page Application.
- Used `Redux` and `React-Redux`as the state management tool to maintain global persistent states and avoid long props chain.
- Built a `Koa.js` based backend to offer RESTful APIs functionalities and interact with the MongoDB for storing data of users and orders.
- Used `Swagger` to build API documentation and debugging page
- Implemented the `JWT` token-based Authentication to verify the user identity.

## 🏁 Getting Started
These instructions will guide you to set up the project and run on your local machine for development and testing purposes.

### 🔧 Prerequisites
What things you need to install the software and how to install them.
```
Node
React
MongoDB
```

### ⚙️  Setup [MongoDB](https://www.mongodb.com/)

Change the secret key of your own MongoDB
At **/server/config/config.env**

```
MONGO_URI={YOUR_MONGODB_CONNECT_KEY}
```

### ⛏️ Installing

At root folder
```
npm install
npm start
```
[Backend repo](https://bitbucket.org/Michael_Guo11/idea_tree_pizza_backend/src/master/)

## ✍️ Authors
- [@Allen Xiao](https://github.com/pengfei123xiao)
