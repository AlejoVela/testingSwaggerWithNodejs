const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const moment = require('moment');

const userSchema = mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  roleId: { type: mongoose.Types.ObjectId },
  status: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
});

userSchema.methods.generateJWT = function () {
  return jwt.sign({
    _id: this._id,
    userName = this.userName,
    roleId: this.roleId,
    iat: moment().unix(),
  },
    process.env.SECRET_KEY
  );
}

const user = mongoose.model('user', userSchema);
module.exports = user;