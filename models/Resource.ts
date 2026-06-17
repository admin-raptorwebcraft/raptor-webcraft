import mongoose, { Schema, Document, Model } from "mongoose";

export interface IResource extends Document {
  title: string; description: string; category: string; url: string; type: string; active: boolean;
}

const ResourceSchema = new Schema<IResource>({
  title:       { type: String, required: true },
  description: { type: String },
  category:    { type: String, default: "General" },
  url:         { type: String, default: "#" },
  type:        { type: String, enum: ["guide","template","video","document"], default: "guide" },
  active:      { type: Boolean, default: true },
}, { timestamps: true });

const Resource: Model<IResource> = mongoose.models.Resource || mongoose.model<IResource>("Resource", ResourceSchema);
export default Resource;
