import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { connectToDatabase } from "./config/db.js";
import productsRouter from "./routes/products.js";
import { notFoundHandler, errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

// Обслуговування статичних файлів з папки assets
app.use("/assets", express.static(path.join(__dirname, "../src/assets")));

if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is missing");
await connectToDatabase(process.env.MONGODB_URI);


app.use("/api/products", productsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
