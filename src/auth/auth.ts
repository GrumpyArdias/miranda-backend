import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { SECRETS } from "../utils/jwtUtils";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { Userlogin } from "../db/loginDb";

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        if (Userlogin.email !== email) {
          return done(null, false, { message: "User not found" });
        }
        if (Userlogin.password !== password) {
          return done(null, false, { message: "Wrong Password" });
        }
        return done(null, Userlogin, { message: "Logged in Successfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      secretOrKey: SECRETS.jwt,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      try {
        return done(null, payload.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

export default passport;
