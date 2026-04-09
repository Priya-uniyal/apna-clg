const Contact = require('../models/Contact');

// @desc    Submit contact form
// @route   POST /api/contact
const submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const contact = new Contact({ name, email, phone, subject, message });
    const createdContact = await contact.save();
    res.status(201).json({ message: 'Message sent successfully', contact: createdContact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all messages (Admin)
// @route   GET /api/contact
const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Mark message as read (Admin)
// @route   PUT /api/contact/:id
const markAsRead = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
      contact.isRead = true;
      await contact.save();
      res.json({ message: 'Marked as read' });
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete message (Admin)
// @route   DELETE /api/contact/:id
const deleteMessage = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
      await Contact.deleteOne({ _id: req.params.id });
      res.json({ message: 'Message deleted' });
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { submitContact, getMessages, markAsRead, deleteMessage };
