import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    menu: [
      {
        name: {
          type: String,
          required: true,
        },
        items: [
          {
            type: mongoose.Types.ObjectId,
            ref: "foods",
          },
        ],
      },
    ],
    recomandation: [
      {
        type: mongoose.Types.ObjectId,
        ref: "foods",
        unique: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const menuModel = mongoose.model("menus", menuSchema);
