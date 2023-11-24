import { Schema } from "mongoose";

export const TaskSchema = new Schema(
  {
    name: { type: String, maxLength: 150, required: true },
    weight: { type: Number, required: true },
    projectId: { type: Schema.Types.ObjectId, required: true },
    sprintId: { type: Schema.Types.ObjectId, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true },
    isComplete: { type: Boolean, default: false, required: true },
    completedOn: { type: Date, min: new Date() }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)


TaskSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})