import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    const { token } = JSON.parse(userInfo);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const authAPI = {
  login: (data: { email: string; password: string }) => api.post('/auth/login', data),
  register: (data: { name: string; email: string; password: string; phone?: string }) =>
    api.post('/auth/register', data),
  getProfile: () => api.get('/auth/profile'),
};

export const productsAPI = {
  getAll: (params?: { search?: string; category?: string }) =>
    api.get('/products', { params }),
  getFeatured: () => api.get('/products/featured'),
  getById: (id: string) => api.get(`/products/${id}`),
  create: (data: ProductInput) => api.post('/products', data),
  update: (id: string, data: Partial<ProductInput>) => api.put(`/products/${id}`, data),
  delete: (id: string) => api.delete(`/products/${id}`),
};

export const ordersAPI = {
  create: (data: OrderInput) => api.post('/orders', data),
  getAll: (params?: { status?: string }) => api.get('/orders', { params }),
  getById: (id: string) => api.get(`/orders/${id}`),
  update: (id: string, data: { status: string }) => api.put(`/orders/${id}`, data),
  delete: (id: string) => api.delete(`/orders/${id}`),
  getAnalytics: () => api.get('/orders/analytics'),
};

export const contactAPI = {
  submit: (data: ContactInput) => api.post('/contact', data),
  getAll: () => api.get('/contact'),
  markAsRead: (id: string) => api.put(`/contact/${id}`),
  delete: (id: string) => api.delete(`/contact/${id}`),
};

export interface Product {
  _id: string;
  name: string;
  nameHindi?: string;
  description: string;
  price: number;
  unit: string;
  category: string;
  image: string;
  inStock: boolean;
  featured: boolean;
  minOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductInput {
  name: string;
  nameHindi?: string;
  description: string;
  price: number;
  unit: string;
  category: string;
  image?: string;
  inStock?: boolean;
  featured?: boolean;
  minOrder?: number;
}

export interface Order {
  _id: string;
  customerName: string;
  phone: string;
  email?: string;
  product: string;
  quantity: number;
  unit: string;
  address: string;
  message?: string;
  status: string;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
}

export interface OrderInput {
  customerName: string;
  phone: string;
  email?: string;
  product: string;
  quantity: number;
  unit?: string;
  address: string;
  message?: string;
  totalAmount?: number;
}

export interface ContactInput {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface UserInfo {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

export interface Analytics {
  totalOrders: number;
  pendingOrders: number;
  confirmedOrders: number;
  processingOrders: number;
  deliveredOrders: number;
  cancelledOrders: number;
  ordersByProduct: { _id: string; count: number; totalQuantity: number }[];
  monthlyOrders: { _id: string; count: number; totalAmount: number }[];
  totalRevenue: number;
}

export default api;
