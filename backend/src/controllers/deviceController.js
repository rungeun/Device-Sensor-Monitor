const deviceService = require('../services/deviceService');

exports.getAllDevices = async (req, res) => {
  try {
    const { threshold = 30, tables } = req.query;
    const devices = await deviceService.getAllDevices(threshold, tables);
    res.json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDeviceDetails = async (req, res) => {
  try {
    const { deviceId } = req.params;
    const device = await deviceService.getDeviceDetails(deviceId);
    
    if (!device) {
      return res.status(404).json({ error: 'Device not found' });
    }
    
    res.json(device);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDeviceStats = async (req, res) => {
  try {
    const stats = await deviceService.getDeviceStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getActivityData = async (req, res) => {
  try {
    const { hours = 24 } = req.query;
    const activity = await deviceService.getActivityData(hours);
    res.json(activity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};