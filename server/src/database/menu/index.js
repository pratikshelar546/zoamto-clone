import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema(
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

export const MenuModel = mongoose.model("Menus", MenuSchema);
