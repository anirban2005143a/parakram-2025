// models/player.js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  playerId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  collegeName: {
    type: String,
    required: true
  },
  sportName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  idCardPicture: {
    type: String,
    required: false
  },
  accommodation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Accommodation'
  },
  accommodationType: {
    type: String,
    enum: ['Type1', 'Type2', 'Type3', 'Type4', 'Type5', 'Type6'],
    required: false
  },
  accommodationPrice: {
    type: Number,
    required: false
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  tshirtSize: {
    type: String,
    enum: ['S', 'M', 'L', 'XL', 'XXL', 'NA'],
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Player', playerSchema);
