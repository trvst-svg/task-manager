import pool from "../database/pool.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function login(req, res){
    //get login credentials from body
    const{username, password} = req.body;

    //validate credentials
    if(!username || !password){
        return res,json({error:"Missing fields"});
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

    //get password stored in the database
    const db_password = user.password;

    //authenticate password
    const password_authentication = await bcrypt.compare(password, db_password);
    if(password_authentication == false){
        return res.json({error:"invalid passsword"});
    }

    //generate access token
    const accessToken = jwt.sign({user: user.username}, secretKey)
    //send token and message 
    res.send("logged in successfully")
    




}
