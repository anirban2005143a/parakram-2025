const validateTeamRegistration = (req, res, next) => {
    const { sportName, players } = req.body;
  
    if (!sportName) {
      return res.status(400).json({
        success: false,
        message: 'Sport name is required'
      });
    }
  
    if (!players || !Array.isArray(players) || players.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'At least one player is required'
      });
    }
  
    for (const player of players) {
      if (!player.name || !player.phoneNumber || !player.collegeName || !player.sportName) {
        return res.status(400).json({
          success: false,
          message: 'Each player must have name, phone number, college name, and sport name'
        });
      }
    }
  
    next();
  };
  
  const validatePayment = (req, res, next) => {
    const { transactionId, amountPaid } = req.body;
  
    if (!transactionId || !amountPaid) {
      return res.status(400).json({
        success: false,
        message: 'Transaction ID and amount paid are required'
      });
    }
  
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Payment screenshot is required'
      });
    }
  
    next();
  };
  
  module.exports = {
    validateTeamRegistration,
    validatePayment
  };