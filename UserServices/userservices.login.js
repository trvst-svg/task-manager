import pool from "../database/pool.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//import secretKey from '../secret.js'
//import refreshKey from '../secret.js'

export default async function login(req, res){
    //get login credentials from body
    const{username, password} = req.body;

    //validate credentials
    if(!username || !password){
        return res.json({error:"Missing fields"});
    }

    //find account in database
    const checkAccount = await pool.query(
        'SELECT username, password FROM users WHERE username = $1',
        [username]
    )
    //check account and store it
    if(checkAccount.rowCount() == 0){
        return res.send("Account does not exist")
    }
    else{
        const user = checkAccount.rows[0];
    }

    //authenticate password
    const password_authentication = await bcrypt.compare(password, user.password);
    if(password_authentication == false){
        return res.json({error:"invalid passsword"});
    }

    //generate access token
    const accessToken = jwt.sign({user: user.username}, secretKey)
    const refreshToken = jwt.sign({user: user.username}, refreshKey,{expiresIn:'7d'});

    //send token and message 
    res.json({
        message: "logged in successfully",
        accessToken,
        refreshToken,
        username: user.username
    });
}