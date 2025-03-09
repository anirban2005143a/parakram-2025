// controllers/accommodationController.js
const Player = require('../models/player');
const Accommodation = require('../models/accommodation');
const Team = require('../models/team');

const selectAccommodation = async (req, res) => {
  try {
    const { teamId, playerAccommodations } = req.body;
    
    // Validate team exists
    const team = await Team.findOne({ teamId });
    if (!team) {
      return res.status(404).json({
        success: false,
        message: 'Team not found'
      });
    }
    
    const accommodationPrices = Accommodation.getPrices();
    let totalAmount = 0;
    const updatePromises = [];
    
    // Update each player's accommodation
    for (const item of playerAccommodations) {
      const { playerId, accommodationType } = item;
      
      // Validate player exists and belongs to team
      const player = await Player.findOne({ 
        playerId, 
        team: team._id 
      });
      
      if (!player) {
        return res.status(404).json({
          success: false,
          message: 'Player with ID ${playerId} not found or not in team'
        });
      }
      
      // Create accommodation
      const price = accommodationPrices[accommodationType];
      const accommodation = new Accommodation({
        type: accommodationType,
        price,
        player: player._id
      });
      
      await accommodation.save();
      
      // Update player with accommodation reference and direct accommodation info
      player.accommodation = accommodation._id;
      player.accommodationType = accommodationType;
      player.accommodationPrice = price;
      updatePromises.push(player.save());
      
      totalAmount += price;
    }
    
    // Wait for all updates to complete
    await Promise.all(updatePromises);
    
    res.status(200).json({
      success: true,
      data: {
        teamId,
        totalAmount
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

const getAccommodationTypes = async (req, res) => {
  try {
    const prices = Accommodation.getPrices();
    
    const accommodationTypes = Object.keys(prices).map(type => ({
      type,
      price: prices[type]
    }));
    
    res.status(200).json({
      success: true,
      data: accommodationTypes
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
  selectAccommodation,
  getAccommodationTypes
};