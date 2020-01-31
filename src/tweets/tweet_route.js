import express from 'express';
const router = express.Router();
import { PassAuth } from '../config/passport';

import { PostTweet, GetAllTweets, GetSingleTweet, FollowTweets } from './tweet_controller';

router.post('/post', PassAuth.authenticate('jwt', {session: false}), PostTweet);

router.get('/tweets', GetAllTweets);

router.get('/singletweet/:id', GetSingleTweet);

router.get('/following', PassAuth.authenticate('jwt', {session: false}), FollowTweets);

export { router as tweetRouter }