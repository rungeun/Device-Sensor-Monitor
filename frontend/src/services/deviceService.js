import api from './api';

const deviceService = {
  getAllDevices: (params = {}) => {
    return api.get('/devices', { params });
  },
  
  getDeviceDetails: (deviceId) => {
    return api.get(`/devices/${deviceId}`);
  },
  
  getDeviceStats: () => {
    return api.get('/devices/stats');
  },
  
  getActivityData: (hours = 24) => {
    return api.get('/devices/activity', { params: { hours } });
  }
};

export default deviceService;