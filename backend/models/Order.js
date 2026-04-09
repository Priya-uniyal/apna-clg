const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Please provide phone number'],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    product: {
      type: String,
      required: [true, 'Please select a product'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please provide quantity'],
      min: 1,
    },
    unit: {
      type: String,
      default: 'units',
    },
    address: {
      type: String,
      required: [true, 'Please provide delivery address'],
    },
    message: {
      type: String,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'processing', 'delivered', 'cancelled'],
      default: 'pending',
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Order', orderSchema);
