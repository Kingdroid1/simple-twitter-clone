import { User } from './user_model.js';
import { Tweet } from '../tweets/tweet_model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { SignupValidation } from '../error-handling/signup.js';
import { SigninValidation } from '../error-handling/signin.js';

export const Signup = (req, res) => {
    const { isValid, errors } = SignupValidation(req.body);

    if (!isValid) {
        return res.status(404).json(errors)
    }

    // check if user already exists
    User.findOne({ email: req.body.email })
        .exec((err, user) => {
            if (user) {
                errors.email = 'User already exists';
                return res.status(404).json(errors);
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (e, hash) => {
                        const newUser = new User({
                            name: req.body.name,
                            email: req.body.email,
                            password: hash
                        })

                        newUser.save()
                            .then(nUser => res.send(nUser))
                            .catch(err => { return err });
                    })
                })
            }

        })
}

export const Signin = (req, res) => {
    const { errors, isValid } = SigninValidation(req.body);

    if (!isValid) {
        return res.status(404).json(errors);
    }

    // fetch user
    User.findOne({ email: req.body.email })
        .exec((err, user) => {

            if (err) {
                errors.email = 'User not found'
                return res.status(404).json(errors);
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                            const token = jwt.sign({ id: user._id }, process.env.secret, { expiresIn: '1d' }, (err, token) => {
                                return res.json({
                                    success: true,
                                    loggedInUser: user.name,
                                    token: token,
                                    msg: 'user logged in'
                                })
                            })
                        } else {
                            errors.password = 'Password is incorrect'
                            return res.status(404).json(errors);
                        }
                    }).catch(err => { return err });
            }

        });
}

export const FollowUsers = (req, res) => {
    User.findOneAndUpdate({
        _id: req.user.id
    }, {
        $push: { following: req.body.userId }
    },
        { new: true })
        .then(user => {
            User.findOneAndUpdate({
                _id: req.body.userId
            }, {
                $push: { followers: req.user.id }
            }, { new: true })
                .then(user => res.json({ Following: user.following, Followers: user.followers }))
                .catch(err => console.log(err))
        }).catch(err => console.log(err))
     
}

export const ViewOwnTimeline = async (req, res) => {
    try {
        const tweets = await Tweet.find({}).populate('user')
            .limit(5)
            .sort({ createdAt: 'desc' });
        return res.json({
            name: req.user.name,
            followers: req.user.followers,
            following: req.user.following,
            Tweets: tweets
        })
    } catch (e) {
        console.log(e)
        res.redirect('/')
    }
}

export const SearchUsersByName = async (req, res) => {
    const name = req.params.name;

    await User.findOne({ name: { $regex: ".*" + name + ".*", $options: "i" } })
        .exec((err, user) => {
            if (err) return err;
            res.json({
                result: user
            })
        })
}