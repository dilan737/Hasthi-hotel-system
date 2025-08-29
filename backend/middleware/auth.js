import jwt  from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config
export default function verifyJwt(req, res, next)  {
    const header = req.header("Authorization"); // ✅ fixed space issue

    if(header !=null){
        const token=header.replace("Bearer ","")
        console.log(token);
        jwt.verify(token,process.env.JWT_KEY,(err,decoded)=>{
            console.log(decoded);
            if(decoded !=null){
                req.user=decoded;
            }
        })
    }
    //console.log(header); // should log the token from Postman
    //check code

    next();
}