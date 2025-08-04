import api from './api';

const authService = {
  login: (username, password) => {
    return api.post('/auth/login', { username, password });
  },
  
  logout: () => {
    return api.post('/auth/logout');
  },
  
  verifyToken: () => {
    return api.get('/auth/verify');
  }
};

export default authService;