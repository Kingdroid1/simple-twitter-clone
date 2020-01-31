import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
		type: String,
		required: true,
		unique: true
    },
    
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	
	password: {
		type: String
    },
    
	followers: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
    following: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
    
}, { timestamps: true,
	 collection: 'users',
	 usePushEach: true }
);

export const User = mongoose.model('User', userSchema);