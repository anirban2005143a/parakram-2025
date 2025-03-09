const Team = require('../models/team');
const Player = require('../models/player');

const generateTeamId = async () => {
  const prefix = 'IITISM';
  const count = await Team.countDocuments();
  const id = (count + 1).toString().padStart(6, '0');
  return `${prefix}T${id}`;
};

const generatePlayerId = async () => {
  const prefix = 'IITISM';
  const count = await Player.countDocuments();
  const id = (count + 1).toString().padStart(6, '0');
  return `${prefix}P${id}`;
};

module.exports = {
  generateTeamId,
  generatePlayerId
};
