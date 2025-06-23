// const express = require('express');
// const router = express.Router();
// const {
//  getProjects,
//  createProject,
//  updateProject,
//  deleteProject
// } = require('../controllers/projectController');
// router.get('/', getProjects);
// router.post('/', createProject);
// router.put('/:id', updateProject);
// router.delete('/:id', deleteProject);
// module.exports = router;


const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
// const Contact = require('../models/contactModel'); // ✅ this must match the filename


router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Message saved successfully", data: newMessage });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
