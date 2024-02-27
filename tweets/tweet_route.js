import express from 'express';
const router = express.Router();
import { PassAuth } from '../config/passport.js';

import { PostTweet, GetAllTweets, GetSingleTweet, Following } from './tweet_controller.js';

router.post('/post', PassAuth.authenticate('jwt', {session: false}), PostTweet);

router.get('/tweets', GetAllTweets);

router.get('/singletweet/:id', GetSingleTweet);

router.get('/following', PassAuth.authenticate('jwt', {session: false}), Following);

export { router as tweetRouter }