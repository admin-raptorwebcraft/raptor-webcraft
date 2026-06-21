import mongoose, { Schema, Document, Model } from "mongoose";

export interface IResource extends Document {
  title: string;
  description: string;
  category: string;
  fileUrl: string;
  fileType: string;
  downloads: number;
  uploadedBy: mongoose.Types.ObjectId;
}

const ResourceSchema = new Schema<IResource>(
  {
    title: {
      type: String,
      required: true,
    },

    description: String,

    category: {
      type: String,
      default: "General",
    },

    fileUrl: {
      type: String,
      required: true,
    },

    fileType: {
      type: String,
      required: true,
    },

    downloads: {
      type: Number,
      default: 0,
    },

    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default (mongoose.models.Resource as Model<IResource>) ||
  mongoose.model<IResource>("Resource", ResourceSchema);