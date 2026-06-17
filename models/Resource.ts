import mongoose, { Schema, Document, Model } from "mongoose";

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
  description: { type: String, required: true },
  category:    { type: String, required: true },
  type:        { type: String, required: true },
  url:         { type: String, default: "#" },
  active:      { type: Boolean, default: true },
}, { timestamps: true });

const Resource: Model<IResource> = mongoose.models.Resource || mongoose.model<IResource>("Resource", ResourceSchema);
export default Resource;
