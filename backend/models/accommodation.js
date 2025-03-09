const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Type1', 'Type2', 'Type3', 'Type4', 'Type5', 'Type6']
  },
  price: {
    type: Number,
    required: true
  },
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  }
});


accommodationSchema.statics.getPrices = function() {
  return {
    'Type1': 2250,
    'Type2': 1850,
    'Type3': 1450,
    'Type4': 1600,
    'Type5': 1200,
    'Type6': 800
  };
};

module.exports = mongoose.model('Accommodation', accommodationSchema);
