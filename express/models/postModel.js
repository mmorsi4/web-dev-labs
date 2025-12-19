const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model("posts", postsSchema);