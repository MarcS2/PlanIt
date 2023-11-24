import { Schema } from "mongoose";

export const NoteSchema = new Schema(
  {
    body: { type: String, maxLength: 650, required: true },
    taskId: { type: Schema.Types.ObjectId, required: true },
    projectId: { type: Schema.Types.ObjectId, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)


NoteSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})