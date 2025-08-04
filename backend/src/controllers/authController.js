const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Simple authentication (in production, check against database)
    if (username === config.security.adminUsername && 
        password === config.security.adminPassword) {
      
      const token = jwt.sign(
        { username }, 
        config.security.jwtSecret, 
        { expiresIn: config.security.jwtExpiresIn }
      );
      
      res.json({ 
        token, 
        user: { username },
        expiresIn: config.security.jwtExpiresIn
      });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

exports.logout = (req, res) => {
  // In a real app, you might want to blacklist the token
  res.json({ message: 'Logged out successfully' });
};

exports.verifyToken = (req, res) => {
  // This endpoint is called after authMiddleware, so if we get here, token is valid
  res.json({ 
    valid: true, 
    user: req.user 
  });
};