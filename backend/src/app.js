const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const schemeRoutes = require('./routes/schemeRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/schemes', schemeRoutes);
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the Scheme Matching API');
});

module.exports = app;