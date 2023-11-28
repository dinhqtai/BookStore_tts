import mongoose, { Schema } from "mongoose";
const Role = ["admin", "user"]
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gioHang: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Book",
        },
    ],
    role: {
        type: String,
        enum: Role,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
)
const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User