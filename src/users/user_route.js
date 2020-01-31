import express from 'express';
const router = express.Router();
import { PassAuth } from '../config/passport';

import { Signup, Signin, FollowUsers, ViewOwnTimeline, SearchUsersByName }  from './user_controller';

router.post('/signup', Signup);

router.post('/signin', Signin);

router.post('/follow', PassAuth.authenticate('jwt', { session: false }), FollowUsers);

router.get('/timeline', PassAuth.authenticate('jwt', { session: false }), ViewOwnTimeline);

router.get('/search/:name', SearchUsersByName);


export { router as userRouter }