const express = require('express');
const { registerTeam, getTeamById } = require('../controllers/teamController.js');
const { validateTeamRegistration } = require('../middlewares/validation.js');

const router = express.Router();

router.post('/register', validateTeamRegistration, registerTeam);
router.get('/:id', getTeamById);

module.exports = router;