import mongoose, { Schema, Document, Model } from "mongoose";

export interface IResource extends Document {
  title: string;
  description: string;
  type: "guide" | "template" | "video" | "document";
  url: string;
  active: boolean;
}

const ResourceSchema = new Schema<IResource>(
  {
    title:       { type: String, required: true },
    description: { type: String, required: true },
    type:        { type: String, enum: ["guide", "template", "video", "document"], default: "document" },
    url:         { type: String, default: "#" },
    active:      { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Resource: Model<IResource> = mongoose.models.Resource || mongoose.model<IResource>("Resource", ResourceSchema);
export default Resource;
