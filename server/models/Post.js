var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	id: ObjectId,
	content: String, 
	dateCreated: Date, 
	dateLastModified: Date, 
	active: Boolean, 
	comments: ObjectId, 
	likes: Number,
	shares: Number
});
	
var Post = mongoose.model('Post', postSchema);

module.exports = Post;