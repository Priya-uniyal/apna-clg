const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide product name'],
      trim: true,
    },
    nameHindi: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      min: 0,
    },
    unit: {
      type: String,
      required: [true, 'Please provide unit'],
      enum: ['per bag', 'per ton', 'per cubic meter', 'per piece', 'per truck', 'per sq ft'],
    },
    category: {
      type: String,
      required: [true, 'Please provide category'],
      enum: ['Cement', 'Sand', 'Bricks', 'Gravel', 'Steel', 'Tiles', 'Paint', 'Other'],
    },
    image: {
      type: String,
      default: '/images/default-product.jpg',
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    minOrder: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ name: 'text', description: 'text', category: 'text' });

module.exports = mongoose.model('Product', productSchema);
