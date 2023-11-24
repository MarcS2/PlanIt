import { Schema } from "mongoose";

export const SprintSchema = new Schema(
  {
    name: { type: String, maxLength: 50, required: true },
    projectId: { type: Schema.Types.ObjectId, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true },
    isOpen: { type: Boolean, required: true, default: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)


SprintSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: "Account",
  justOne: true
})
