import mongoose, { Schema } from "mongoose";

const FormSubmissionSchema = new Schema({
  company: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.FormSubmission || mongoose.model("FormSubmission", FormSubmissionSchema);
