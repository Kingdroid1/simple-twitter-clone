import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const tweetSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		required: true
    },
    
	post: {
		type: String,
		required: true
	},
	
}, { timestamps: true,
    collection: 'tweets' 
})

export const Tweet = mongoose.model('Tweet', tweetSchema)