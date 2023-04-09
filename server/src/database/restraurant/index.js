import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mapLocation: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    cuisine: [String],
    restaurantTiming: String,
    contactNumber: Number,
    website: String,
    popularDishes: [String],
    avrageCost: String,
    amenties: String,
    menuImages: {
      type: mongoose.Types.ObjectId,
      ref: "images",
    },
    menu: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Menus",
      },
    ],
    // items: [
    //   {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Foods",
    //   },
    // ],
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "reviews",
      },
    ],
  },
  {
    timestamps: true,
  },
  { typeKey: "$type" }
);

export const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);
