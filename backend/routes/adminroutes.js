const express = require('express');
const { 
  getAllTeams, 
  getAllPlayers, 
  getPlayersBySport, 
  getPaymentDetails, 
  getDashboardStats,
  getPaymentScreenshotByTeam,
  getTeamsBySport,
  getStatistics,
  getAllPayments,
  verifyPayment
} = require('../controllers/adminController');
const { protect } = require('../middlewares/auth');

const router = express.Router();

// Protect all admin routes
router.use(protect);

router.get('/teams', getAllTeams);
router.get('/players', getAllPlayers);
router.get('/players/sport/:sport', getPlayersBySport);
//router.get('/players',getAllPayments);
//router.get('/players',verifyPayment);
router.get('/teams/sport/:sport', getTeamsBySport);
router.get('/payments', getPaymentDetails);
router.get('/dashboard', getDashboardStats);
router.get('/payments/team/:teamId/screenshot', getPaymentScreenshotByTeam);
router.get('/statistics', getStatistics);

module.exports = router;