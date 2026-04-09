const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrderAnalytics,
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/auth');

router.post('/', createOrder);
router.get('/', protect, admin, getOrders);
router.get('/analytics', protect, admin, getOrderAnalytics);
router
  .route('/:id')
  .get(protect, admin, getOrderById)
  .put(protect, admin, updateOrder)
  .delete(protect, admin, deleteOrder);

module.exports = router;
