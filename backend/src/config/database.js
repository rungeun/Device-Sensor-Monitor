const mysql = require('mysql2/promise');
const config = require('./config');

let pool;

async function initializeDatabase() {
  try {
    pool = mysql.createPool(config.database);
    
    // Test connection
    const connection = await pool.getConnection();
    console.log('✅ MySQL pool created successfully');
    
    const [result] = await connection.execute('SELECT 1');
    console.log('✅ MySQL connection test passed');
    
    connection.release();
    
    return pool;
  } catch (error) {
    console.error('❌ MySQL initialization failed:', error.message);
    throw error;
  }
}

function getPool() {
  if (!pool) {
    throw new Error('Database pool not initialized');
  }
  return pool;
}

module.exports = {
  initializeDatabase,
  getPool
};