import { Schema, model } from "mongoose";

const newUser = new Schema(
  {
    email: String,
    nome: String,
  },
  {
    timestamps: true,
  }
);

export default model("User", newUser);
