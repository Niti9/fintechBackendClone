
import express from "express";
import cors from "cors";
import infoRoutes from "./api/routes/info.route.js";
import listingsRoutes from './api/routes/listings.route.js'
import tickersRoutes from "./api/routes/tickers.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use("fintech/api/info", infoRoutes);
app.use("fintech/api/listings", listingsRoutes);
app.use("fintech/api/tickers", tickersRoutes);

// ERROR HANDLER
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});