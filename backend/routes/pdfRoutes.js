const express = require('express');
const Team = require('../models/team.js');
const { generatePDF } = require('../utils/pdfGenerator.js');
const router = express.Router();

router.get('/download/:teamId', async (req, res) => {
  try {
    const teamId = req.params.teamId;

    // Find team with populated data
    const team = await Team.findOne({ teamId })
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

    // Generate PDF
    const { fileName, buffer, contentType } = await generatePDF(
      team.toObject(),
      team.players,
      team.payment.toObject()
    );

    // Set headers to trigger download
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-Type', contentType);

    // Send PDF data
    res.send(buffer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;
