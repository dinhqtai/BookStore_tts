import mongoose from "mongoose";
const createDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
    } catch (err) {
        console.error(err.message);
    };
}
export default connectDB;