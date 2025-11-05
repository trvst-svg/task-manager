import jwt from 'jsonwebtoken';
//import {secretKey} from '../secret.js';

export default async function verifyToken(req, res, next){
    const authHeader = await req.headers['authorization'];
    const token = await authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(201).json({message:"Token unavailable"})
    }

    jwt.verify(token, secretKey);
    
    next();
}