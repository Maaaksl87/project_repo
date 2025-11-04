# Online Store

## Overview
This project is an online store application built using React for the frontend and Node.js with Express for the backend. It allows users to browse products, view details, and manage a shopping cart. Used MongoDB for the database (for practice and mastering the database)

## Technologies Used
- **Frontend:**
  - React
  - Vite
  - Styled-components

- **Backend:**
  - Node.js
  - Express
  - Mongoose (for MongoDB)
  - CORS
  - dotenv

## Project Structure
```
- onlinestore/
  - frontend/ (React app)
  - backend/ (Node.js app)
```

### Frontend
- The frontend is developed using React and Vite, which provides a fast development environment.
- The main entry point is `src/main.jsx`.
- Components are organized in the `src/components` directory.

### Backend
- The backend is built with Express and connects to a MongoDB database using Mongoose.
- The main entry point is `backend/index.js`.
- API routes are defined in the `backend/routes` directory.

## How to Run the Project
### Backend
1. Install dependencies and run:
   ```
   cd backend
   npm install
   node index.js
   ```

### Frontend
1. Install dependencies and run:
   ```
   cd frontend
   npm install
   npm run dev
   ```

## API Endpoints
- **GET** `/api/products` - Retrieve all products
- **GET** `/api/products/:id` - Retrieve a product by ID
- **POST** `/api/products` - Create a new product (body: `{ name, header, image, price }`)

## License
This project is licensed under the MIT License.
