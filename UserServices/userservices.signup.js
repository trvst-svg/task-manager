import pool from "../database/pool.js";
import bcrypt from "bcrypt";

export default async function signup(req, res){
    //get credentials from body
    const {username, password, email, number} = req.body;
    
    //check for missing credentials
    if(!username || !password || !email || !number){
        return res.json(
            {
                error: "missing fields"
            }
        );
    }

    //check if username, email or number already exist within the database
    const checkUsername = await pool.query(
        'SELECT * FROM users WHERE username = $1',
        [username] 
    )

    if (checkUsername.rowCount() > 0){
        return res.json(
            {
                error: "username already exists"
            }
        );
    }

    const checkEmail = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    )
    if (checkEmail.rowCount() > 0){
        return res.json(
            {
                error: "email already exists"
            }
        )
    };
    
    const checkNumber = await pool.query(
        'SELECT * FROM users WHERE number = $1',
        [number]
    )
    if (checkNumber.rowCount() > 0){
        return res.json(
            {
                error: "number already exists"
            }
        )
    };

    //generate salt to encrypt password
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const signupQuery = pool.query(
        'INSERT INTO users(username, password, email, number) VALUES ($1, $2, $3, $4)',
        [username, encryptedPassword, email, number]
    )
    res.send("user created successfully")
}