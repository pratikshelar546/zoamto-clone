import passport from "passport";
import JWTPassport from "passport-jwt";
import { UserModel } from "../database/allModels";

const JWTStrategy =JWTPassport.Strategy;
const ExtractJwt = JWTPassport.ExtractJwt;


// its authorization bearer sometokenstring

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"zomatoApp",
};

export default (passport)=>{
    passport.use(
        new JWTStrategy(options, async(jwt__payload,done)=>{
            try {
              const doseUserExist = await UserModel.findById(jwt__payload.user);
              if(!doseUserExist) return done(null,false)
              return done(null,doseUserExist);
            } catch (error) {
                throw new Error(error);
            }
        })
    )
}
