import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js"; // ✅ Add removeFood here
import multer from "multer";
import FoodModel from "../models/foodModel.js";

const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage });

// Add food item routes
foodRouter.post("/add", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        let image_filename = req.file.filename;

        const food = new FoodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        await food.save();
        res.json({ success: true, message: "Food added successfully" });
    } catch (error) {
        console.error("Error adding food:", error);
        res.status(500).json({ success: false, message: "Error adding food" });
    }
});

foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);  // ✅ Now removeFood is defined

export default foodRouter;
