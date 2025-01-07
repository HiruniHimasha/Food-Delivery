import foodModel from "../models/foodModels.js";
import fs from 'fs';

// Add food item (with image upload)
const addFood = async (req, res) => {
    try {
        // Check if image file is uploaded
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'Image file is required' });
        }

        let image_filename = req.file.filename; // Get the uploaded image filename

        // Create new food document
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        // Save food item to the database
        await food.save();
        res.json({ success: true, message: "Food Added", data: food });
    } catch (error) {
        console.error('Error in addFood:', error.message);
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};

// List all food items
const listFood = async (req, res) => {
    try {
        const food = await foodModel.find({});
        res.json({ success: true, data: food });
    } catch (error) {
        console.error('Error in listFood:', error.message);
        res.status(500).json({ success: false, message: 'Error fetching food items', error: error.message });
    }
};

// Remove Food
const removeFood = async (req, res) => {
    try {
        const foodId = req.body.id; // Get the food ID from the request body

        if (!foodId) {
            return res.status(400).json({ success: false, message: 'Food ID is required' });
        }

        const food = await foodModel.findById(foodId);

        if (!food) {
            return res.status(404).json({ success: false, message: 'Food not found' });
        }

        // Delete the image file from the 'uploads' directory
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) console.error(`Failed to delete image file: ${err.message}`);
        });

        // Delete the food document from the database
        await foodModel.findByIdAndDelete(foodId);
        
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.error('Error in removeFood:', error.message);
        res.status(500).json({ success: false, message: 'Error removing food item', error: error.message });
    }
};

export { addFood, listFood, removeFood };
