const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');
const authMiddleware = require('../middleware/authMiddleware');

// All device routes require authentication
router.use(authMiddleware);

router.get('/', deviceController.getAllDevices);
router.get('/stats', deviceController.getDeviceStats);
router.get('/activity', deviceController.getActivityData);
router.get('/:deviceId', deviceController.getDeviceDetails);

module.exports = router;