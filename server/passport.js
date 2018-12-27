const passport = require("passport");
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");

const User = require("./models/users");

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: process.env.JWT_SECRET
    },
    async (payload, done) => {
      try { 
        const user = await User.findById(payload.id);
        if (!user) return done(null, false);
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
