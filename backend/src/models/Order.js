const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true }
      }
    ],
    total: { type: Number, required: true },
    status: { type: String, enum: ["pending","completed","cancelled"], default: "pending" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
