import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        users: {
            type: mongoose.Types.ObjectId,
            ref: "users",
        },
        orderDetails: [
            {
                food: [
                    {
                        deatils: {
                            type: mongoose.Types.ObjectId,
                            ref: "foods"
                        },
                        quantity: { 
                            type: Number, 
                            required: true 
                        },

                    }
                ],
                payMode: {
                    type: String,
                    required: true,
                },
                status: { type: String, required: true },
                paymentDetails: [
                    {
                        itemTotal: {
                            type: Number,
                            required: true,
                        },
                        promo: { type: Number, required: true },
                        tax: { type: number, required: true },
                        razorpay_id: { type: String, required: true },
                    },
                ],
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const orderModel = mongoose.model("order", orderSchema);
