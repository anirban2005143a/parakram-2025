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
        idCardPicture: playerData.idCardPicture || null,
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

// controllers/teamController.js (just updating the getTeamById method)

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


// const Team = require('../models/team');
// const Player = require('../models/player');
// const Accommodation = require('../models/accommodation');
// const { generateTeamId, generatePlayerId } = require('../utils/idGenerator');

// const registerTeam = async (req, res) => {
//   try {
//     const { sportName, players } = req.body;
    
//     // Generate team ID
//     const teamId = await generateTeamId();
    
//     // Create team
//     const team = await Team.create({
//       teamId,
//       sportName
//     });
    
//     // Create players
//     const playerObjects = [];
    
//     for (const playerData of players) {
//       // Generate player ID
//       const playerId = await generatePlayerId();
      
//       // Create player with accommodation data if provided
//       const playerObj = {
//         playerId,
//         name: playerData.name,
//         phoneNumber: playerData.phoneNumber,
//         collegeName: playerData.collegeName,
//         sportName: playerData.sportName,
//         email: playerData.email || null,
//         idCardPicture: playerData.idCardPicture || null,
//         accommodationType: playerData.accommodationType || null,
//         //accommodationPrices: playerData.accommodationType.
//         team: team._id
//       };
      
//       // If accommodation data is provided, handle it
//       if (playerData.accommodation) {
//         // Find or create accommodation
//         let accommodation;
        
//         if (typeof playerData.accommodation === 'string') {
//           // If accommodation is passed as a type string (e.g., "Type1")
//           const accommodationPrices = Accommodation.getPrices();
//           accommodation = await Accommodation.create({
//             type: playerData.accommodation,
//             price: accommodationPrices[playerData.accommodation],
//             player: null // Will update this after player creation
//           });
          
//           playerObj.accommodation = accommodation._id;
//           playerObj.accommodationType = playerData.accommodation;
//         } else if (playerData.accommodation._id) {
//           // If accommodation is passed as an existing accommodation ID
//           accommodation = await Accommodation.findById(playerData.accommodation._id);
//           playerObj.accommodation = accommodation._id;
//           playerObj.accommodationType = accommodation.type;
//         }
//       }
      
//       const player = await Player.create(playerObj);
      
//       // Update the accommodation with the player reference if it exists
//       if (playerObj.accommodation) {
//         await Accommodation.findByIdAndUpdate(playerObj.accommodation, {
//           player: player._id
//         });
//       }
      
//       playerObjects.push(player);
//     }
    
//     // Update team with players
//     team.players = playerObjects.map(player => player._id);
//     await team.save();
    
//     res.status(201).json({
//       success: true,
//       data: {
//         team,
//         players: playerObjects
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error',
//       error: error.message
//     });
//   }
// };

// const getTeamById = async (req, res) => {
//   try {
//     const team = await Team.findOne({ teamId: req.params.id })
//       .populate({
//         path: 'players',
//         populate: {
//           path: 'accommodation'
//         }
//       })
//       .populate('payment');
    
//     if (!team) {
//       return res.status(404).json({
//         success: false,
//         message: 'Team not found'
//       });
//     }
    
//     res.status(200).json({
//       success: true,
//       data: team
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error',
//       error: error.message
//     });
//   }
// };

// module.exports = {
//   registerTeam,
//   getTeamById
// };