const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('./src/config/config');
const { initializeDatabase } = require('./src/config/database');
const routes = require('./src/routes');
const errorHandler = require('./src/middleware/errorHandler');
const { initializeCacheService } = require('./src/services/cacheService');

const app = express();

// Middleware
app.use(cors(config.cors));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

// Start server
async function startServer() {
  try {
    // Initialize database
    await initializeDatabase();
    
    // Initialize cache service
    await initializeCacheService();
    
    // Start listening
    app.listen(config.server.port, '0.0.0.0', () => {
      console.log(`\n🚀 Device Sensor Monitor - Server running in ${config.server.env} mode`);
      console.log(`📡 Port: ${config.server.port}`);
      console.log(`🌐 Public IP: ${config.server.publicIp}`);
      console.log(`🔧 API Health: http://${config.server.publicIp}:${config.server.port}/api/health\n`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully...');
  process.exit(0);
});