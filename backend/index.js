import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { Users } from './models/Model.js';
import cookieParser from "cookie-parser";
import signupRoute from "./routes/signup.js";
import loginRoute from "./routes/login.js"
import userprofileRoute from "./routes/userprofile.js"
const port = 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true // Enable set cookie
};
app.use(cors(corsOptions));
app.use('/signup',signupRoute);
app.use('/login',loginRoute);
app.use('/users/userdata',userprofileRoute)
mongoose.connect('mongodb://127.0.0.1:27017/Testweb')
    .then(() => {
        console.log("app is connected to database");

    })
    .catch((error) => {
        console.log(error)
    });
app.listen(port, () => {
    console.log(`post is runnign on ${port}`);
})
app.get('/', (req, res) => {
    res.send("Homepage is running bro");
})
