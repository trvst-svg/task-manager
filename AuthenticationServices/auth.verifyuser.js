import jwt from 'jsonwebtoken';
import secretkey from '../UserServices/secret.js';

export default function verifyToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        res.status(201).json({message:"Token unavailable"})
    }

    jwt.verify(token, secretkey)
}