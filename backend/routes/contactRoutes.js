const express = require('express');
const router = express.Router();
const {
  submitContact,
  getMessages,
  markAsRead,
  deleteMessage,
} = require('../controllers/contactController');
const { protect, admin } = require('../middleware/auth');

router.route('/').post(submitContact).get(protect, admin, getMessages);
router
  .route('/:id')
  .put(protect, admin, markAsRead)
  .delete(protect, admin, deleteMessage);

module.exports = router;
