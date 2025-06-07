import {env} from "./env";

export default{
    jwtSecret: env.JWT_SECRET,
    db:{
        url:env.MONGODB,
    }
}