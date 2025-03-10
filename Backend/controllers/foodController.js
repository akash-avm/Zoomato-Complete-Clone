import fs from "fs";
import path from "path";
import FoodModel from "../models/foodModel.js";

// Add food item controller
const addFood = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image is required!" });
        }

        const food = new FoodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: req.file.filename,
        });

        await food.save();
        res.json({ success: true, message: "Food added successfully!" });
    } catch (error) {
        console.error("Error adding food:", error);
        res.status(500).json({ success: false, message: "Error adding food" });
    }
};

// Get all food items
const listFood = async (req, res) => {
    try {
        const foods = await FoodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log("Error fetching food list:", error);
        res.status(500).json({ success: false, message: "Error fetching food list" });
    }
};

// Remove food item
const removeFood = async (req, res) => {
    try {
        console.log("Received ID:", req.body.id); // Debugging log

        // Find food item
        const food = await FoodModel.findById(req.body.id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food not found" });
        }

        console.log("Food Found:", food); // Debugging log

        // Delete image file
        const imagePath = path.join("uploads", food.image);
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error("File delete error:", err);
            } else {
                console.log("File deleted successfully:", food.image);
            }
        });

        // Delete from database
        await FoodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });

    } catch (error) {
        console.error("Error while removing food:", error);
        res.status(500).json({ success: false, message: "Error while removing food" });
    }
};

export { addFood, listFood, removeFood };
