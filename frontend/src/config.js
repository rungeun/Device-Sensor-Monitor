const config = {
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  publicUrl: process.env.REACT_APP_PUBLIC_URL || 'http://localhost:3000',
  env: process.env.REACT_APP_ENV || 'development',
  
  // Feature flags
  features: {
    enableDebugMode: process.env.REACT_APP_ENV === 'development',
    refreshInterval: 30000, // 30 seconds
    deviceThresholdMinutes: 30
  }
};

export default config;

// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);