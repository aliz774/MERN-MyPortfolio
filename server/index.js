const express = require('express');
const cors = require('cors'); // ✅ Import CORS
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// ✅ Enable CORS
app.use(cors()); 
app.use(express.json());

// Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/contactdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
