import passportjwt from 'passport-jwt';
import passport from 'passport';
import dotenv from 'dotenv';
import { User } from '../users/user_model.js';
const JwtStrategy = passportjwt.Strategy;
const ExtractJwt = passportjwt.ExtractJwt;
dotenv.config();


// used to serialize the user for the session
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  // used to deserialize the user
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secret || '';

	passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
		try {
			const user = await User.findOne({ id: jwt_payload.sub });
			if (user) {
				return done(null, user);
			}
			else {
				return done(null, false);
			}
		}
		catch (err) {
			return done(err, false);
		}
	}));

export { passport as PassAuth };