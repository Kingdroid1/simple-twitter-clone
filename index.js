import express from 'express';
const router = express.Router();

/* Models */
import './users/user_model.js';
import './tweets/tweet_model.js';

/* Routes */
import { userRouter } from './users/user_route.js';
import { tweetRouter } from './tweets/tweet_route.js';

router.use('/user', userRouter);
router.use('/tweet', tweetRouter);
router.use('/index', userRouter);

router.get('/', (req, res) => {
    res.send('api works');
});

export { router as api }