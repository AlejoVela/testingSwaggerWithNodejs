const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  name: String,
  description: String,
  status: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
});

const role = mongoose.model('role', roleSchema);

module.exports = role;
