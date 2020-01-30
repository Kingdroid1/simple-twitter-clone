import express from 'express';
const router = express.Router();
import { PassAuth } from '../config/passport';

import { Signup, Signin }  from './user_controller';

router.post('/signup', Signup);

router.post('/signin', Signin);

router.get('/timeline', PassAuth.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        followers: req.user.followers,
        following: req.user.following
    })
});


export { router as userRouter }