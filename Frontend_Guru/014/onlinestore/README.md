## Online Store - Dev Setup

### Backend
1) Create `backend/.env`:
```
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority
PORT=3001
```
2) Install deps and run:
```
cd backend
npm i
npm run dev
```

### Frontend
1) Install deps and run:
```
cd ..
npm i
npm run dev
```
The Vite dev server proxies `/api` to `http://localhost:3001`.

### API
- GET `/api/products`
- GET `/api/products/:id`
- POST `/api/products` body: `{ name, header, image, price }`
