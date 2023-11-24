import { Schema } from "mongoose";

export const ProjectSchema = new Schema(
  {
    name: { type: String, maxLength: 150, required: true },
    description: { type: String, maxLength: 500, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true }
  }
)