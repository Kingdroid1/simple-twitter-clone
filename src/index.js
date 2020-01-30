import express from 'express';
const router = express.Router();

/* Models */
import './users/user_model';
import './tweets/tweet_model';

/* Routes */
import { userRouter } from './users/user_route';
import { tweetRouter } from './tweets/tweet_route';

router.use('/user', userRouter);
router.use('/tweet', tweetRouter);
router.use('/index', userRouter);

router.get('/', (req, res) => {
    res.send('api works');
});

export { router as api }