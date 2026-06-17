import mongoose, { Schema, Document, Model } from "mongoose";

export interface IResource extends Document {
  title: string; description: string; category: string; fileUrl?: string; tags: string[]; downloads: number;
}

const ResourceSchema = new Schema<IResource>(
  { title: { type: String, required: true }, description: { type: String, required: true }, category: { type: String, required: true }, fileUrl: String, tags: [String], downloads: { type: Number, default: 0 } },
  { timestamps: true }
);

const Resource: Model<IResource> = mongoose.models.Resource || mongoose.model<IResource>("Resource", ResourceSchema);
export default Resource;
