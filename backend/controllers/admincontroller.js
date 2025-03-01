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

const getTeamsBySport = async (req, res) => {
  try {
    const { sport } = req.params;
    
    if (!sport) {
      return res.status(400).json({
        success: false,
        error: 'Sport parameter is required'
      });
    }
    
    // Find all teams for the specified sport
    const teams = await Team.find({ sportName: sport }).populate('players');
    
    if (teams.length === 0) {
      return res.status(404).json({
        success: false,
        error: `No teams found for sport: ${sport}`
      });
    }
    
    // Find all players for these teams
    const teamIds = teams.map(team => team.teamId);
    const players = await Player.find({ 
      teamId: { $in: teamIds },
      sportName: sport 
    }).populate('accommodation');
    
    // Organize players by team
    const teamsWithPlayers = teams.map(team => {
      const teamPlayers = players.filter(player => player.teamId === team.teamId);
      return {
        teamId: team.teamId,
        sportName: team.sportName,
        createdAt: team.createdAt,
        pdfUrl: team.pdfUrl,
        players: teamPlayers
      };
    });
    
    res.status(200).json({
      success: true,
      count: teams.length,
      totalPlayers: players.length,
      data: teamsWithPlayers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

const getStatistics = async (req, res) => {
  try {
    const teamsCount = await Team.countDocuments();
    const playersCount = await Player.countDocuments();
    const paymentsCount = await Payment.countDocuments();
    const completedPaymentsCount = await Payment.countDocuments({ status: 'completed' });
    const pendingPaymentsCount = await Payment.countDocuments({ status: 'pending' });
    
    const totalRevenue = await Payment.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$amountPaid' } } }
    ]);

    // Get stats by sport
    const sportsList = await Team.distinct('sportName');
    const sportStats = await Promise.all(
      sportsList.map(async (sport) => {
        const teamCount = await Team.countDocuments({ sportName: sport });
        const playerCount = await Player.countDocuments({ sportName: sport });
        
        return {
          sport,
          teams: teamCount,
          players: playerCount
        };
      })
    );

    res.status(200).json({
      success: true,
      data: {
        teamsCount,
        playersCount,
        paymentsCount,
        completedPaymentsCount,
        pendingPaymentsCount,
        totalRevenue: totalRevenue.length > 0 ? totalRevenue[0].total : 0,
        sportStats
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
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
  getTeamsBySport,
  getPlayersBySport,
  getPaymentDetails,
  getDashboardStats,
  getPaymentScreenshotByTeam,
  getStatistics,
};