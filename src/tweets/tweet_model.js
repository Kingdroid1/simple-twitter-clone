import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const tweetSchema = new Schema({
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User'
	},

	post: {
		type: String,
		required: true,
		trim: true,
		maxlength: 280
	},

	replies: [{
		body: { type: String, default: '', maxlength: 280 },
		user: { type: mongoose.Schema.ObjectId, ref: 'User' },
		name: { type: String, default: '' }
	}]

}, {
	timestamps: true,
	collection: 'tweets',
	usePushEach: true
}
);

export const Tweet = mongoose.model('Tweet', tweetSchema)