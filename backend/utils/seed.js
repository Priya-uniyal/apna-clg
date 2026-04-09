const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');
const User = require('../models/User');

dotenv.config();

const products = [
  {
    name: 'Cement',
    nameHindi: 'सीमेंट',
    description: 'High-quality OPC 43 Grade Cement ideal for all types of construction work including foundations, pillars, beams, and slabs. Provides excellent strength and durability.',
    price: 380,
    unit: 'per bag',
    category: 'Cement',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400',
    inStock: true,
    featured: true,
    minOrder: 10,
  },
  {
    name: 'PPC Cement',
    nameHindi: 'पीपीसी सीमेंट',
    description: 'Portland Pozzolana Cement suitable for plastering, tiling, and masonry work. Offers better resistance against chemicals and higher long-term strength.',
    price: 350,
    unit: 'per bag',
    category: 'Cement',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400',
    inStock: true,
    featured: false,
    minOrder: 10,
  },
  {
    name: 'River Sand',
    nameHindi: 'रेत / बालू',
    description: 'Fine quality natural river sand perfect for plastering, flooring, and concrete mixing. Properly washed and graded for optimal construction use.',
    price: 55,
    unit: 'per cubic meter',
    category: 'Sand',
    image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400',
    inStock: true,
    featured: true,
    minOrder: 1,
  },
  {
    name: 'M-Sand (Manufactured Sand)',
    nameHindi: 'एम-सैंड',
    description: 'Manufactured sand produced from crushed hard granite stone. Ideal for concrete work and provides better strength than natural sand.',
    price: 45,
    unit: 'per cubic meter',
    category: 'Sand',
    image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400',
    inStock: true,
    featured: false,
    minOrder: 1,
  },
  {
    name: 'Red Bricks',
    nameHindi: 'लाल ईंट',
    description: 'First-class red clay bricks made from high-quality soil. Uniform size, smooth surface, and excellent compressive strength for wall construction.',
    price: 8,
    unit: 'per piece',
    category: 'Bricks',
    image: 'https://images.unsplash.com/photo-1590075865003-e48277faa558?w=400',
    inStock: true,
    featured: true,
    minOrder: 500,
  },
  {
    name: 'Fly Ash Bricks',
    nameHindi: 'फ्लाई ऐश ईंट',
    description: 'Eco-friendly bricks made from fly ash. Lighter in weight, uniform in shape, and offers better thermal insulation compared to traditional red bricks.',
    price: 6,
    unit: 'per piece',
    category: 'Bricks',
    image: 'https://images.unsplash.com/photo-1590075865003-e48277faa558?w=400',
    inStock: true,
    featured: false,
    minOrder: 500,
  },
  {
    name: 'Gravel (Gitti)',
    nameHindi: 'गिट्टी / बजरी',
    description: 'Crushed stone aggregate available in various sizes (10mm, 20mm, 40mm). Essential for concrete preparation and road construction.',
    price: 35,
    unit: 'per cubic meter',
    category: 'Gravel',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400',
    inStock: true,
    featured: true,
    minOrder: 1,
  },
  {
    name: 'TMT Steel Bars',
    nameHindi: 'सरिया / TMT बार',
    description: 'High-strength Thermo Mechanically Treated steel bars for RCC construction. Available in 8mm, 10mm, 12mm, 16mm, and 20mm diameters.',
    price: 65,
    unit: 'per piece',
    category: 'Steel',
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400',
    inStock: true,
    featured: true,
    minOrder: 10,
  },
  {
    name: 'Ceramic Floor Tiles',
    nameHindi: 'सिरेमिक टाइल्स',
    description: 'Premium quality ceramic tiles with anti-skid surface. Available in various designs and sizes for flooring and wall applications.',
    price: 45,
    unit: 'per sq ft',
    category: 'Tiles',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400',
    inStock: true,
    featured: false,
    minOrder: 50,
  },
  {
    name: 'Exterior Paint',
    nameHindi: 'बाहरी पेंट',
    description: 'Weather-resistant exterior emulsion paint with long-lasting finish. Provides excellent coverage and protection against rain and sunlight.',
    price: 350,
    unit: 'per piece',
    category: 'Paint',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400',
    inStock: true,
    featured: false,
    minOrder: 1,
  },
  {
    name: 'White Cement',
    nameHindi: 'सफेद सीमेंट',
    description: 'Premium white cement for decorative applications, tile joints, and wall putty preparation. Provides smooth and bright finish.',
    price: 450,
    unit: 'per bag',
    category: 'Cement',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400',
    inStock: true,
    featured: false,
    minOrder: 5,
  },
  {
    name: 'Binding Wire',
    nameHindi: 'बाइंडिंग वायर',
    description: 'Galvanized binding wire for tying TMT steel bars during RCC construction. Available in 20 gauge and 22 gauge.',
    price: 85,
    unit: 'per piece',
    category: 'Steel',
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400',
    inStock: true,
    featured: false,
    minOrder: 5,
  },
];

const adminUser = {
  name: 'Admin',
  email: 'admin@construction.com',
  password: 'admin123',
  role: 'admin',
  phone: '9876543210',
};

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});

    // Seed products
    await Product.insertMany(products);
    console.log('Products seeded successfully');

    // Seed admin user
    await User.create(adminUser);
    console.log('Admin user created: admin@construction.com / admin123');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedDB();
