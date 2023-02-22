import passport, { use } from "passport";
import googleOauth from "passport-google-oauth2";
import { UserModel } from "../database/users";

const googleStratergy = googleOauth.Strategy;

export default (passport) => {
  passport.use(
    new googleStratergy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8081/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          fullName: profile.displayName,
          email: profile.emails[0].value,
          profilePic: profile.photos[0].value,
        };
        try {
          const user = await UserModel.findOne({ email: newUser.email });
          if (user) {
            const token = user.genrateJwtToken();
            done(null, { user, token });
          } else {
            const user = await UserModel.create(newUser);
            const token = user.genrateJwtToken();
            done(null, { user, token });
          }
        } catch (error) {
          done(error, null);
        }
      }
    )
  );
  passport.serializeUser((userData,done)=>done(null,{...userData}));
  passport.deserializeUser((id,done)=>done(null,id));
};
