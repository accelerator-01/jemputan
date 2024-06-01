import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
    position: {
      longitude: { type: Number, required: true },
      latitude: { type: Number, required: true },
    },
  },
  {
    timestamps: true,
  }
);

schoolSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

export const School = mongoose.model("School", schoolSchema);
