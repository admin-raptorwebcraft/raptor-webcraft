import mongoose, { Schema, Document, Model } from 'mongoose';

export interface INotice extends Document {
  title: string; body: string; type: 'General'|'Important'|'Urgent'|'Update'; pinned: boolean;
}

const NoticeSchema = new Schema<INotice>({
  title:  { type: String, required: true },
  body:   { type: String, required: true },
  type:   { type: String, enum:['General','Important','Urgent','Update'], default:'General' },
  pinned: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Notice || mongoose.model<INotice>('Notice', NoticeSchema);
