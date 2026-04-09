# BuildMart - Construction Material Supplier Website

A modern, full-stack website for a construction material supplier business built with React.js, Node.js, Express.js, and MongoDB.

## Tech Stack

| Layer          | Technology                        |
| -------------- | --------------------------------- |
| Frontend       | React.js + Tailwind CSS + Vite    |
| Backend        | Node.js + Express.js              |
| Database       | MongoDB + Mongoose                |
| Authentication | JWT (JSON Web Tokens)             |
| API            | REST API                          |
| Charts         | Recharts                          |

## Features

### Pages
- **Home Page** — Hero section, featured products, testimonials, call-to-action
- **Products Page** — Product listing with search, category filter, WhatsApp order button
- **Order Page** — Order inquiry form with product selection and estimated total
- **About Page** — Company history, mission/vision, stats, core values
- **Contact Page** — Contact form, Google Maps, WhatsApp & phone buttons
- **Admin Dashboard** — Order management, product CRUD, analytics charts, messages
- **Login / Register** — JWT authentication with role-based access

### Extra Features
- Product search and category filtering
- WhatsApp floating button for quick contact
- Mobile-responsive design
- Construction theme colors (yellow, black, grey)
- Order analytics with bar and pie charts
- Admin can add/edit/delete products and manage orders

## Project Structure

```
apna-clg/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js  # Login & Register
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── contactController.js
│   ├── middleware/
│   │   └── auth.js            # JWT auth & admin middleware
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   └── contactRoutes.js
│   ├── utils/
│   │   └── seed.js            # Database seeder
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   ├── context/
│   │   │   └── AuthContext.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── OrderPage.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Login.tsx
│   │   │   └── AdminDashboard.tsx
│   │   ├── services/
│   │   │   └── api.ts         # Axios API client & types
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   └── .env
│
└── README.md
```

## MongoDB Schemas

### User
```js
{
  name: String,        // required
  email: String,       // required, unique
  password: String,    // required, min 6 chars (hashed with bcrypt)
  role: String,        // 'user' | 'admin', default: 'user'
  phone: String
}
```

### Product
```js
{
  name: String,        // required
  nameHindi: String,
  description: String, // required
  price: Number,       // required
  unit: String,        // 'per bag' | 'per ton' | 'per cubic meter' | 'per piece' | 'per truck' | 'per sq ft'
  category: String,    // 'Cement' | 'Sand' | 'Bricks' | 'Gravel' | 'Steel' | 'Tiles' | 'Paint' | 'Other'
  image: String,
  inStock: Boolean,    // default: true
  featured: Boolean,   // default: false
  minOrder: Number     // default: 1
}
```

### Order
```js
{
  customerName: String, // required
  phone: String,        // required
  email: String,
  product: String,      // required
  quantity: Number,      // required
  unit: String,
  address: String,      // required
  message: String,
  status: String,       // 'pending' | 'confirmed' | 'processing' | 'delivered' | 'cancelled'
  totalAmount: Number
}
```

### Contact
```js
{
  name: String,    // required
  email: String,   // required
  phone: String,
  subject: String, // required
  message: String, // required
  isRead: Boolean  // default: false
}
```

## API Routes

### Auth
| Method | Route               | Description        | Access  |
| ------ | ------------------- | ------------------ | ------- |
| POST   | `/api/auth/register` | Register new user  | Public  |
| POST   | `/api/auth/login`    | Login user         | Public  |
| GET    | `/api/auth/profile`  | Get user profile   | Private |

### Products
| Method | Route                    | Description         | Access       |
| ------ | ------------------------ | ------------------- | ------------ |
| GET    | `/api/products`          | Get all products    | Public       |
| GET    | `/api/products/featured` | Get featured items  | Public       |
| GET    | `/api/products/:id`      | Get single product  | Public       |
| POST   | `/api/products`          | Create product      | Admin only   |
| PUT    | `/api/products/:id`      | Update product      | Admin only   |
| DELETE | `/api/products/:id`      | Delete product      | Admin only   |

### Orders
| Method | Route                    | Description         | Access       |
| ------ | ------------------------ | ------------------- | ------------ |
| POST   | `/api/orders`            | Create order        | Public       |
| GET    | `/api/orders`            | Get all orders      | Admin only   |
| GET    | `/api/orders/analytics`  | Get order analytics | Admin only   |
| GET    | `/api/orders/:id`        | Get order by ID     | Admin only   |
| PUT    | `/api/orders/:id`        | Update order status | Admin only   |
| DELETE | `/api/orders/:id`        | Delete order        | Admin only   |

### Contact
| Method | Route              | Description       | Access       |
| ------ | ------------------ | ----------------- | ------------ |
| POST   | `/api/contact`     | Submit message    | Public       |
| GET    | `/api/contact`     | Get all messages  | Admin only   |
| PUT    | `/api/contact/:id` | Mark as read      | Admin only   |
| DELETE | `/api/contact/:id` | Delete message    | Admin only   |

## Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)
- npm

### 1. Clone the repository
```bash
git clone https://github.com/Priya-uniyal/apna-clg.git
cd apna-clg
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/construction-supplier
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

Seed the database with sample products and admin user:
```bash
npm run seed
```

Start the backend server:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install
```

Start the frontend dev server:
```bash
npm run dev
```

The frontend runs at `http://localhost:5173` and the backend at `http://localhost:5000`.

### 4. Admin Login
After seeding the database, use these credentials:
- **Email:** admin@construction.com
- **Password:** admin123

## Products Included (Seed Data)

| Product              | Hindi Name     | Price   | Unit            |
| -------------------- | -------------- | ------- | --------------- |
| Cement (OPC 43)      | सीमेंट          | ₹380    | per bag         |
| PPC Cement           | पीपीसी सीमेंट    | ₹350    | per bag         |
| River Sand           | रेत / बालू      | ₹55     | per cubic meter |
| M-Sand               | एम-सैंड         | ₹45     | per cubic meter |
| Red Bricks           | लाल ईंट         | ₹8      | per piece       |
| Fly Ash Bricks       | फ्लाई ऐश ईंट    | ₹6      | per piece       |
| Gravel (Gitti)       | गिट्टी / बजरी   | ₹35     | per cubic meter |
| TMT Steel Bars       | सरिया / TMT बार  | ₹65     | per piece       |
| Ceramic Floor Tiles  | सिरेमिक टाइल्स   | ₹45     | per sq ft       |
| Exterior Paint       | बाहरी पेंट       | ₹350    | per piece       |
| White Cement         | सफेद सीमेंट      | ₹450    | per bag         |
| Binding Wire         | बाइंडिंग वायर    | ₹85     | per piece       |
