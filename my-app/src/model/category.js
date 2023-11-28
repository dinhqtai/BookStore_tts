import mongoose, { Schema } from "mongoose";
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
}
);
const Category = mongoose.models.Book || mongoose.model("Category", categorySchema);
export default Category;