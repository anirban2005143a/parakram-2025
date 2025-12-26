const express = require('express');
const { selectAccommodation, getAccommodationTypes } = require('../controllers/accommodationController.js');

const router = express.Router();

router.get('/types', getAccommodationTypes);
router.post('/select', selectAccommodation);

module.exports = router;