import express from 'express';
import { Users } from '../models/Model.js';
const router = express.Router();
import { checkAuth } from '../middlewares/checkAuth.js';

router.get('/', checkAuth, async (req, res) => {
    console.log(req.id)
    try {
        const user = await Users.findById(req.id).select('-password');
        console.log(user);
        if(user){
            return res.status(200).send(user);
        }
        else{
            return res.status(400).send({ message: 'Error' });
        }
        
    }
    catch (error) {
        return res.status(400).send({ message: error });
    }
})

export default router;