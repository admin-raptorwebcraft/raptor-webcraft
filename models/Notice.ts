import mongoose, { Schema, Document } from "mongoose";

export interface INotice extends Document {
  title: string;
  content: string;
  type: "general" | "important" | "urgent" | "update";
  pinned: boolean;
  active: boolean;
}

const NoticeSchema = new Schema<INotice>({
  title:   { type: String, required: true },
  content: { type: String, required: true },
  type:    { type: String, enum: ["general", "important", "urgent", "update"], default: "general" },
  pinned:  { type: Boolean, default: false },
  active:  { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Notice || mongoose.model<INotice>("Notice", NoticeSchema);
