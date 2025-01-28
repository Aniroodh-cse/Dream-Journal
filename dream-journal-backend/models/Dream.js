const mongoose = require('mongoose');

const DreamSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  title: { type: String, required: true },
  description: { type: String, required: true },
  emotions: [String],
  tags: [String],
});

module.exports = mongoose.model('Dream', DreamSchema);
