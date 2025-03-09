const Team = require('../models/team');
const Payment = require('../models/payment');
const { generatePDF } = require('../utils/pdfGenerator');
const cloudinary = require('../config/cloudinary');
const streamifier = require('streamifier');

const processPayment = async (req, res) => {
  try {
    const { teamId, transactionId, amountPaid } = req.body;
    
    // Find team
    const team = await Team.findOne({ teamId }).populate({
      path: 'players',
      populate: {
        path: 'accommodation'
      }
    });
    
    if (!team) {
      return res.status(404).json({
        success: false,
        message: 'Team not found'
      });
    }
    
    // Upload image to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'sports-fest/payments'
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      
      streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
    });
    
    // Create payment with Cloudinary info
    const payment = await Payment.create({
      team: team._id,
      transactionId,
      amountPaid,
      paymentScreenshot: {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id
      }
    });
    
    // Update team with payment
    team.payment = payment._id;
    await team.save();
    
    // Generate PDF with registration details
    const pdfDetails = await generatePDF(
      team.toObject(),
      team.players,
      payment.toObject()
    );
    
    res.status(200).json({
      success: true,
      data: {
        teamId: team.teamId,
        players: team.players.map(player => ({
          playerId: player.playerId,
          name: player.name
        })),
        payment: {
          transactionId: payment.transactionId,
          amountPaid: payment.amountPaid,
          screenshotUrl: payment.paymentScreenshot.url
        },
        pdfUrl: `/pdfs/${pdfDetails.fileName}`
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

// Add an endpoint to get the payment screenshot
const getPaymentScreenshot = async (req, res) => {
  try {
    const { paymentId } = req.params;
    
    const payment = await Payment.findById(paymentId);
    
    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: {
        url: payment.paymentScreenshot.url
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
  processPayment,
  getPaymentScreenshot
};