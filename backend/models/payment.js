const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  transactionId: {
    type: String,
    required: true
  },
  amountPaid: {
    type: Number,
    required: true
  },
  paymentScreenshot: {
    url: {
      type: String,
      required: true
    },
    public_id: {
      type: String,
      required: true
    }
  },
  paymentDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Payment', paymentSchema);