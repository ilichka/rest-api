import express from "express";

export const userRouter = express.Router();

userRouter.use((req,res,next)=>{
    console.log('users');
    next();
})// middleware as well. We can add route as first param to make middleware for particular route

userRouter.post('/login', (req, res)=>{
    res.send('login')
})

userRouter.post('/register', (req, res)=>{
    res.send('register')
})