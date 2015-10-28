// db.js

// Requires
var mongoose = require('mongoose');

// Define Schemas
var PostSchema = mongoose.Schema({
  createdAt: Date,
  editedAt: Date,
  deletedAt: Date,
  isActive: Boolean,
  author: String,
  title: String,
  description: String,
  body: String,
  tags: [String]
});


// Define models
var Post = mongoose.model('Post', PostSchema);

// module.exports = Post;
