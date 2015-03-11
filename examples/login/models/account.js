var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportEmail = require('passport-email');

var Account = new Schema({
    nickname: String,
    birthdate: Date
});

Account.plugin(passportEmail);

module.exports = mongoose.model('Account', Account);