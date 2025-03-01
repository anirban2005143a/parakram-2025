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
    'Type1': 1949,
    'Type2': 1549,
    'Type3': 1149,
    'Type4': 1299,
    'Type5': 899,
    'Type6': 399
  };
};

module.exports = mongoose.model('Accommodation', accommodationSchema);