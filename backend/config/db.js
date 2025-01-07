import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://HiruniHimasha:Hiru1234@cluster0.xvukz.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}