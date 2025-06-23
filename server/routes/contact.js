const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Server error while saving message' });
  }
});

module.exports = router;
