# 🏬 Store Manager App

A full-stack web application where users can browse and rate stores across various categories. Admins can manage users, stores, and view submitted ratings.

---

## 🚀 Features

- User login and store rating
- STORE dashboard with rating insights
- Admin dashboard with:
  - Add/manage users
  - Add/manage stores
  - View all submitted ratings
- Category-based store filtering
- Real-time rating updates with averages

---

## 🧰 Tech Stack

- **Frontend**: React, React Router, Tailwind CSS  
- **Backend**: Node.js, Express  
- **Database**: PostgreSQL  
- **State Management**: React Context API  
- **HTTP Client**: Axios

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
https://github.com/saivarunpuri/Store-Manager
cd store-manager
```

### 2. Install Dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 3. Database Setup

Ensure PostgreSQL is running.

Run the SQL schema to create tables:

```sql
-- Example tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password TEXT
);

CREATE TABLE stores (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  address TEXT,
  category TEXT,
  rating NUMERIC DEFAULT 0
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  store_id INT REFERENCES stores(id),
  rating NUMERIC,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password TEXT
);
```

### 4. Seed Default Admin (Optional)


> ⚠️ Use hashed passwords in production.

---

## 📦 Run the App

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm start
```

---

## 🧪 Test Admin Credentials (for Dev Only)

```
📧 Email: "boss@myapp.com"
🔑 Password: "supersecure123"
```

---

---

## 📂 Project Structure

```
/client        # React frontend
/server        # Node.js backend
  └── controllers
  └── routes
  └── configs
  └── models
/database.sql  # (optional) Database schema
```

---

## 📬 API Endpoints

### User

- `POST /api/users/register`  
- `POST /api/users/login`  
- `POST /api/ratings`

### Admin

- `POST /api/admin/login`  
- `GET /api/admin/users`  
- `GET /api/admin/stores`  
- `GET /api/admin/ratings`  
- `POST /api/admin/add-user`  
- `POST /api/admin/add-store`

---

## 💡 Future Improvements

- JWT authentication
- Pagination & search
- User profile editing
