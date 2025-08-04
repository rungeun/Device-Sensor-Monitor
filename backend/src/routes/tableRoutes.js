const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/', tableController.getAllTables);
router.get('/status', tableController.getTableStatus);
router.get('/:tableName', tableController.getTableDetails);

module.exports = router;