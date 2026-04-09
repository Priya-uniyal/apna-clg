import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, ShoppingCart, MessageCircle } from 'lucide-react';
import { productsAPI, type Product } from '../services/api';

const categories = ['All', 'Cement', 'Sand', 'Bricks', 'Gravel', 'Steel', 'Tiles', 'Paint', 'Other'];
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';

export default function Products() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params: { search?: string; category?: string } = {};
      if (selectedCategory !== 'All') params.category = selectedCategory;
      const res = await productsAPI.getAll(params);
      setProducts(res.data);
    } catch {
      setProducts([]);
    }
    setLoading(false);
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.nameHindi && p.nameHindi.includes(search)) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-yellow-400">Products</span>
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Browse our complete range of premium construction materials. From cement to steel, we have everything you need.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-yellow-500 text-gray-900'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin h-12 w-12 border-4 border-yellow-500 border-t-transparent rounded-full mx-auto"></div>
            <p className="text-gray-500 mt-4">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">Out of Stock</span>
                    </div>
                  )}
                  <span className="absolute top-3 left-3 bg-yellow-500 text-gray-900 text-xs px-2 py-1 rounded-full font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  {product.nameHindi && (
                    <p className="text-sm text-gray-500">{product.nameHindi}</p>
                  )}
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-yellow-600">₹{product.price}</span>
                    <span className="text-sm text-gray-500 ml-1">/{product.unit}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Min. order: {product.minOrder} {product.unit}</p>
                  <div className="flex gap-2 mt-4">
                    <Link
                      to={`/order?product=${encodeURIComponent(product.name)}`}
                      className="flex-1 flex items-center justify-center space-x-1 bg-gray-900 hover:bg-gray-800 text-yellow-400 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Order</span>
                    </Link>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in ${product.name} (₹${product.price}/${product.unit}). Please share more details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
