// post.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Schemas
var PostSchema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  editedAt: Date,
  deletedAt: Date,
  isActive: Boolean,
  author: String,
  title: String,
  body: String,
  tags: [String]
});

module.exports = mongoose.model('Post', PostSchema);
