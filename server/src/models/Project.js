import { Schema } from "mongoose";

export const ProjectSchema = new Schema(
  {
    name: { type: String, maxLength: 50, required: true },
    description: { type: String, maxLength: 300, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true }
  }
)