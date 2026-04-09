import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone, Star, Truck, Shield, Clock, ArrowRight } from 'lucide-react';
import { productsAPI, type Product } from '../services/api';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Contractor, Delhi',
    content: 'BuildMart has been our go-to supplier for all construction materials. Their cement quality is excellent and delivery is always on time.',
    rating: 5,
  },
  {
    name: 'Amit Sharma',
    role: 'Builder, Noida',
    content: 'Best prices in the market with consistent quality. Their customer service is very responsive and helpful.',
    rating: 5,
  },
  {
    name: 'Suresh Patel',
    role: 'Property Developer, Gurgaon',
    content: 'We have been working with BuildMart for 5 years. Reliable supply chain and competitive pricing. Highly recommended!',
    rating: 4,
  },
];

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    productsAPI.getFeatured()
      .then((res) => setFeaturedProducts(res.data))
      .catch(() => {});
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium <span className="text-yellow-400">Construction</span> Materials
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Your one-stop shop for high-quality Cement, Sand, Bricks, Gravel, Steel, and all building materials. 
              Trusted by 1000+ contractors and builders across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/order"
                className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Order Now</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-yellow-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: 'Fast Delivery', desc: 'Same day delivery available' },
              { icon: Shield, title: 'Quality Assured', desc: 'ISI certified materials' },
              { icon: Clock, title: '24/7 Support', desc: 'Round the clock assistance' },
              { icon: Star, title: 'Best Prices', desc: 'Competitive market rates' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center space-x-3 text-gray-900">
                <Icon className="h-10 w-10 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our <span className="text-yellow-500">Featured</span> Products
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Top-quality construction materials at the best prices. Everything you need to build your dream project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  {product.nameHindi && (
                    <p className="text-sm text-gray-500 mb-2">{product.nameHindi}</p>
                  )}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-yellow-600">₹{product.price}</span>
                      <span className="text-sm text-gray-500 ml-1">/{product.unit}</span>
                    </div>
                    <Link
                      to={`/order?product=${encodeURIComponent(product.name)}`}
                      className="bg-gray-900 hover:bg-gray-800 text-yellow-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 font-semibold text-lg"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-yellow-500">BuildMart</span>?
              </h2>
              <div className="space-y-4">
                {[
                  'Premium quality ISI certified construction materials',
                  '15+ years of experience in the construction industry',
                  'Competitive prices with bulk order discounts',
                  'Fast and reliable delivery across the region',
                  'Dedicated customer support team',
                  'Wide range of products under one roof',
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <div className="bg-yellow-100 rounded-full p-1 mt-0.5">
                      <svg className="h-4 w-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 mt-8 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600"
                alt="Construction site"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our <span className="text-yellow-400">Customers</span> Say
            </h2>
            <p className="text-gray-400 mt-3">Trusted by thousands of builders and contractors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
              >
                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-yellow-400">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-800 text-lg mb-8 max-w-2xl mx-auto">
            Get the best quality construction materials delivered to your doorstep. Place your order now or contact us for a custom quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/order"
              className="bg-gray-900 hover:bg-gray-800 text-yellow-400 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Place Order
            </Link>
            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210'}?text=Hello! I need construction materials.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
