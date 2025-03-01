const express = require('express');
const { registerTeam, getTeamById } = require('../controllers/teamController');
const { validateTeamRegistration } = require('../middlewares/validation');

const router = express.Router();

router.post('/register', validateTeamRegistration, registerTeam);
router.get('/:id', getTeamById);

module.exports = router;