const dotenv = require('dotenv');
const path = require('path');

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' 
  ? '.env.production' 
  : '.env.development';

dotenv.config({ path: path.join(__dirname, '../../', envFile) });

module.exports = {
  // Database
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT) || 10,
    waitForConnections: true,
    queueLimit: 0,
    connectTimeout: 60000
  },
  
  // Server
  server: {
    port: parseInt(process.env.PORT) || 3001,
    publicIp: process.env.PUBLIC_IP || 'localhost',
    env: process.env.NODE_ENV || 'development'
  },
  
  // Security
  security: {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h',
    adminUsername: process.env.ADMIN_USERNAME,
    adminPassword: process.env.ADMIN_PASSWORD
  },
  
  // Cache
  cache: {
    updateInterval: parseInt(process.env.CACHE_UPDATE_INTERVAL) || 30000,
    deviceThresholdMinutes: parseInt(process.env.DEVICE_THRESHOLD_MINUTES) || 30
  },
  
  // Logging
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    file: process.env.LOG_FILE || 'logs/app.log'
  },
  
  // CORS
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true
  }
};