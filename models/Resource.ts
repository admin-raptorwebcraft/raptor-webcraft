import mongoose, { Schema, Document } from "mongoose";

export interface IResource extends Document {
  title: string;
  description: string;
  category: string;
  type: string;
  url: string;
  active: boolean;
}

const ResourceSchema = new Schema<IResource>({
  title:       { type: String, required: true },
  description: { type: String },
  category:    { type: String, default: "General" },
  type:        { type: String, default: "document" },
  url:         { type: String, default: "#" },
  active:      { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Resource || mongoose.model<IResource>("Resource", ResourceSchema);
