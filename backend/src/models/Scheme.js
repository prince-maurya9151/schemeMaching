const mongoose = require('mongoose');
const schemeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  eligibility: { type: String, required: false },
  category: [String],
  minIncome: { type: Number, required: false },
  maxIncome: { type: Number, required: false },
  states: [String],
  applyLink: { type: String, required: false },
  state: { type: String, required: false }
},{ timestamps: true });

module.exports = mongoose.model('Scheme', schemeSchema);