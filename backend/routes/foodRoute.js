import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodControllers.js";
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // Directory where images will be stored
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`); // Unique filename
    }
});

const upload = multer({ storage: storage });

// Add food with image
foodRouter.post("/add", upload.single("image"), addFood);

// List all food items
foodRouter.get("/list", listFood);

// Remove food
foodRouter.post("/remove", removeFood);

export default foodRouter;
