import mongoose, { Schema, Document, Model } from "mongoose";

export interface INotice extends Document {
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  published: boolean;
  pinned: boolean;
  expiryDate?: Date;
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const NoticeSchema = new Schema<INotice>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },

    published: {
      type: Boolean,
      default: true,
    },

    pinned: {
      type: Boolean,
      default: false,
    },

    expiryDate: Date,

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default (mongoose.models.Notice as Model<INotice>) ||
  mongoose.model<INotice>("Notice", NoticeSchema);