import express from "express";
import { getListings } from "../controllers/listings.controller.js";

const router = express.Router();

router.get("/", getListings);

export default router;
