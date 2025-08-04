const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const deviceRoutes = require('./deviceRoutes');
const tableRoutes = require('./tableRoutes');

// Health check
router.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date(),
    environment: process.env.NODE_ENV
  });
});

// Mount routes
router.use('/auth', authRoutes);
router.use('/devices', deviceRoutes);
router.use('/tables', tableRoutes);

module.exports = router;