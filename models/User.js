const mongoose = require('mongoose');
// const Schema = mongoose.Schema; code below is EQUIVALENT
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);