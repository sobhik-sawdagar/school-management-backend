const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// Add School Route
router.post('/addSchool', schoolController.addSchool);

// List Schools Route
router.get('/listSchools', schoolController.listSchools);

module.exports = router;