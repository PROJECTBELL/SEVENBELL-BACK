const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
  name: {
    type: String,
    required: "Le nom est requis"
  },
  message: {
    type: String,
    required: "Le message est requis"
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  post_id: {
    type: String
  },
  Numbers: {
    type: Number,
    validate : {
      validator : Number.isInteger,
      message : '{VALUE} is not an integer'
    }
  }
});

module.exports = mongoose.model('Comment', commentSchema);
