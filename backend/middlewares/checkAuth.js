import jwt from 'jsonwebtoken';
import { Users } from '../models/Model.js';
export const checkAuth = async (req , res, next)=>{
  
    try {
        console.log("1")
        //console.log(token);
        const token = req.cookies.access_token;
        //console.log(token);
        if (!token) {
            return res.status(401).json("no token found");
        }
        const data = jwt.verify(token, "Shubam");
        
        req.id = data.id;
        const user = await Users.findById(data.id)

        console.log(user);
        if(user){
            req.id = data.id;
            console.log(data.id);
            return next();
        }
        
    }
    catch(error){
        console.log("2")
        console.log(token);
        return res.status(403).json({ message: "Invalid token" });
    }
    
}