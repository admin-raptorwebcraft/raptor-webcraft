import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IResource extends Document {
  title: string; desc: string; category: string; type: string; tags: string[]; url: string;
}

const ResourceSchema = new Schema<IResource>({
  title:    { type: String, required: true },
  desc:     String,
  category: { type: String, default: 'Guide' },
  type:     { type: String, default: 'PDF' },
  tags:     [String],
  url:      String,
}, { timestamps: true });

export default mongoose.models.Resource || mongoose.model<IResource>('Resource', ResourceSchema);
