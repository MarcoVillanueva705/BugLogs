import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Bug = new Schema(
  {
    title: { type: String, required: true, maxlength: 20 },
    comment: { type: String, required: true, maxlength: 200 },
    reportedBy: { type: String, required: true },
    status: { type: String, required: true },
    lastModified: { type: String, max: 2040, min: 1800 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Bug;
