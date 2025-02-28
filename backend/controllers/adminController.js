const Team = require('../models/team');
const Player = require('../models/player');
const Payment = require('../models/payment');

const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find()
      .populate('players')
      .populate('payment');
    
    res.status(200).json({
      success: true,
      count: teams.length,
      data: teams
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find()
      .populate('team')
      .populate('accommodation');
    
    res.status(200).json({
      success: true,
      count: players.length,
      data: players
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const getPlayersBySport = async (req, res) => {
  try {
    const { sport } = req.params;
    
    const players = await Player.find({ sportName: sport })
      .populate('team')
      .populate('accommodation');
    
    res.status(200).json({
      success: true,
      count: players.length,
      data: players
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const getPaymentDetails = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate({
        path: 'team',
        populate: {
          path: 'players'
        }
      });
    
    res.status(200).json({
      success: true,
      count: payments.length,
      data: payments
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const getDashboardStats = async (req, res) => {
  try {
    const totalTeams = await Team.countDocuments();
    const totalPlayers = await Player.countDocuments();
    const totalPayments = await Payment.countDocuments();
    
    // Get total amount collected
    const payments = await Payment.find();
    const totalAmountCollected = payments.reduce((sum, payment) => sum + payment.amountPaid, 0);
    
    // Get players by sport
    const sports = await Player.aggregate([
      {
        $group: {
          _id: '$sportName',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ]);
    
    // Get accommodation distribution
    const accommodationStats = await Accommodation.aggregate([
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 },
          totalRevenue: { $sum: '$price' }
        }
      },
      {
        $sort: { count: -1 }
      }
    ]);
    
    res.status(200).json({
      success: true,
      data: {
        totalTeams,
        totalPlayers,
        totalPayments,
        totalAmountCollected,
        sportDistribution: sports,
        accommodationDistribution: accommodationStats
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const getPaymentScreenshotByTeam = async (req, res) => {
  try {
    const { teamId } = req.params;
    
    const team = await Team.findOne({ teamId }).populate('payment');
    
    if (!team || !team.payment) {
      return res.status(404).json({
        success: false,
        message: 'Team payment not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: {
        teamId: team.teamId,
        paymentId: team.payment._id,
        screenshotUrl: team.payment.paymentScreenshot.url
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

module.exports = {
  getAllTeams,
  getAllPlayers,
  getPlayersBySport,
  getPaymentDetails,
  getDashboardStats,
  getPaymentScreenshotByTeam
};
