import express from 'express';
const router = express.Router();
import { PassAuth } from '../config/passport.js';

import { Signup, Signin, FollowUsers, ViewOwnTimeline, SearchUsersByName }  from './user_controller.js';

router.post('/signup', Signup);

router.post('/signin', Signin);

router.post('/follow', PassAuth.authenticate('jwt', { session: false }), FollowUsers);

router.get('/timeline', PassAuth.authenticate('jwt', { session: false }), ViewOwnTimeline);

router.get('/search/:name', SearchUsersByName);


export { router as userRouter }