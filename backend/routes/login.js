import express from 'express';
import bcrypt from 'bcrypt';
import { Users } from '../models/Model.js';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const user = await Users.findOne({
            usermail: req.body.usermail
        });
        if(!user){
            return res.status(404).json({message:"no user found"});
        }
        const isPassword = await bcrypt.compare(req.body.password,user.password)
        if(!isPassword){
            return res.status(400).json({message:"wrong password"});
        }

        const payload = {
            id: user._id
        }
        const token = jwt.sign(payload,"Shubam",{expiresIn:'2d'})
        console.log(token);
        //console.log(access_token);
        return res.cookie('access_token',token,{
            httpOnly: true,
            withCredentials: true,
            secure: false, // Set to true if using HTTPS
            sameSite: 'lax',
            path: '/' // Ensure the path is set to '/'
        }).status(200).json({
            message:"Login Successful",
            token:token
        });
        

    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });

    }
})

export default router;