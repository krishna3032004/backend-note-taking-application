import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    googleId: { type: String },
    createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("User", UserSchema);
