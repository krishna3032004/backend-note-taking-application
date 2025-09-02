import mongoose, { Schema } from "mongoose";
const NoteSchema = new Schema({
    title: { type: String, default: "" },
    content: { type: String, default: "" },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("Note", NoteSchema);
