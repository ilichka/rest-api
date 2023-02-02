import http from 'http'
import express, {Request, Response, NextFunction} from 'express'
import {userRouter} from "./users/users";

const port = 8000
const app = express();

/*app.all('/hello',(req,res,next)=>{
    console.log('All')
    next()
})*/ //middleware

/*const cb = (req, res, next) => {
    console.log('CB')
    next()
}*///middleware

app.use((req,res,next)=>{
    console.log(`Time: ${Date.now()}`)
    next();
})//middleware

app.get('/hello',  (req,res)=>{
    //res.set('Content-type', 'text/plain') //reasing header
    //res.append('Warning', 'code') //append header
    //res.type('application/json')
   /* res.cookie('token', 'aaaa', {
        domain: '',
        path: '/',
        secure: true,
        expires: 600000
    })
    res.clearCookie('token',{path: '/'})*/ //cookie
    //res.send('Hi!')
    //res.end() // if we don't want to answer
    //res.download('/test.pdf', 'custom_name.pdf') //download
    //res.redirect(301,'https://example.route') //301-default redirect status
    throw new Error('HHHH')
})

app.use('/users', userRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    console.log(err.message);
    res.status(401).send(err.message)
})

app.listen(port,()=>{
    console.log(`Started on ${port} port`)
})

// hel?lo == hello || helo
// hel+lo == hello || hellllllolo
// hel*lo == hello || helsdfafgerertrewwlo
// he(la)?lo == helo || helalo -- group
// also can pass path as regex