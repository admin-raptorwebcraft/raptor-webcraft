import mongoose, { Schema, Document, Model } from "mongoose";

export interface INotice extends Document {
  title: string; body: string; type: string; audience: string; pinned: boolean; createdBy: mongoose.Types.ObjectId;
}

const NoticeSchema = new Schema<INotice>(
  { title: { type: String, required: true }, body: { type: String, required: true }, type: { type: String, default: "General" }, audience: { type: String, default: "All" }, pinned: { type: Boolean, default: false }, createdBy: { type: Schema.Types.ObjectId, ref: "User" } },
  { timestamps: true }
);

const Notice: Model<INotice> = mongoose.models.Notice || mongoose.model<INotice>("Notice", NoticeSchema);
export default Notice;
