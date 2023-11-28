import mongoose, { Schema, SchemaType } from "mongoose";
const khuyenMai = ["True", "False"]
const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: TextTrackCue
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    soLuong: {
        type: Number,
        required: true
    },
    danhGia: {
        type: Number,
        default: 0
    },
    tacGia: {
        type: String,
        required: true
    },
    khuyenMai: {
        type: String,
        enum: khuyenMai,
        default: "False"
    }
}, {
    timestamps: true,
}
);
const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);
export default Book;