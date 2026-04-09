import { Link } from 'react-router-dom';
import { HardHat, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <HardHat className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold text-yellow-400">BuildMart</span>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted partner for premium construction materials. Quality products, competitive prices, and reliable delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-sm hover:text-yellow-400 transition-colors">Products</Link></li>
              <li><Link to="/order" className="text-sm hover:text-yellow-400 transition-colors">Place Order</Link></li>
              <li><Link to="/about" className="text-sm hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=Cement" className="text-sm hover:text-yellow-400 transition-colors">Cement (सीमेंट)</Link></li>
              <li><Link to="/products?category=Sand" className="text-sm hover:text-yellow-400 transition-colors">Sand (रेत)</Link></li>
              <li><Link to="/products?category=Bricks" className="text-sm hover:text-yellow-400 transition-colors">Bricks (ईंट)</Link></li>
              <li><Link to="/products?category=Gravel" className="text-sm hover:text-yellow-400 transition-colors">Gravel (बजरी)</Link></li>
              <li><Link to="/products?category=Steel" className="text-sm hover:text-yellow-400 transition-colors">Steel (सरिया)</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">info@buildmart.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400 mt-0.5" />
                <span className="text-sm">123 Construction Road, Industrial Area, New Delhi - 110001</span>
              </li>
            </ul>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I'm interested in your construction materials.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} BuildMart Construction Materials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
