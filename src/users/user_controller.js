import { User } from './user_model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { SignupValidation } from '../error-handling/signup';
import { SigninValidation } from '../error-handling/signin';

export const Signup = (req, res) => {
    const { isValid, errors } = SignupValidation(req.body);

    if (!isValid) {
        return res.status(404).json(errors)
    }

    // check if user already exists
    User.findOne({email: req.body.email})
        .exec((err, user ) => {
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
                               .catch(err => {return err});
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
    User.findOne({email: req.body.email})
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
                          }).catch(err => {return err});
                    }
           
        });
}