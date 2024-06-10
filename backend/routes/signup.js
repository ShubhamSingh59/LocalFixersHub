import express from 'express';
import bcrypt from 'bcrypt';
import { Users } from '../models/Model.js';
const router = express.Router();
router.post('/', async (req, res) => {
    try {
        let newUser = Users();
        newUser.username = req.body.username;
        newUser.usermail = req.body.usermail;
        newUser.password = req.body.password;
        const existingUser = await Users.findOne({ usermail: newUser.usermail });
        console.log(existingUser);
        if (existingUser) {
            return res.status(400).send({ message: 'User already exists' });
        }
        else {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password,salt);
            newUser.password = hashedPassword;
            await newUser.save();
            res.status(200).send({ message: 'User created!' });
        }

    }
    catch (error) {
        if (error.code === 11000) {
            res.status(400).send({ message: 'User already exists' });
        } else {
            console.log(error);
            res.status(500).send({ message: error.message });
        }
    }
})

export default router;