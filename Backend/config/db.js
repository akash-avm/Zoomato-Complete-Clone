import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Akash:Akash@cluster0.ptvpm.mongodb.net/zoomato', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Database Connected Successfully!");
    } catch (error) {
        console.error("❌ Database Connection Failed:", error);
        process.exit(1); // Stop the app if DB connection fails
    }
};
