const Team = require('../models/team');
const Player = require('../models/player');
const Accommodation = require('../models/accommodation');
const { generateTeamId, generatePlayerId } = require('../utils/idGenerator');

const registerTeam = async (req, res) => {
  try {
    const { sportName, players } = req.body;
    
    // Generate team ID
    const teamId = await generateTeamId();
    
    // Create team
    const team = await Team.create({
      teamId,
      sportName
    });
    
    // Create players
    const playerObjects = [];
    
    for (const playerData of players) {
      // Generate player ID
      const playerId = await generatePlayerId();
      
      const player = await Player.create({
        playerId,
        name: playerData.name,
        phoneNumber: playerData.phoneNumber,
        collegeName: playerData.collegeName,
        sportName: playerData.sportName,
        email: playerData.email || null,
        idCardPicture: playerData.idCardLink || null,
        tshirtSize: playerData.tshirtSize || 'NA',
        team: team._id
      });
      
      playerObjects.push(player);
    }
    
    // Update team with players
    team.players = playerObjects.map(player => player._id);
    await team.save();
    
    res.status(201).json({
      success: true,
      data: {
        team,
        players: playerObjects
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

const getTeamById = async (req, res) => {
  try {
    const team = await Team.findOne({ teamId: req.params.id })
      .populate({
        path: 'players',
        populate: {
          path: 'accommodation'
        }
      })
      .populate('payment');

    if (!team) {
      return res.status(404).json({
        success: false,
        message: 'Team not found'
      });
    }

    res.status(200).json({
      success: true,
      data: team
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
  registerTeam,
  getTeamById
};
