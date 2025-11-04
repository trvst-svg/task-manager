import pool from "../database/pool.js";

export default async function deleteUser(req, res){
    const id = req.body.id;
    
    //find user in db
    const user = await pool.query(
       'SELECT * FROM users WHERE id = $1',
        [id]
    )

    if(user.rowCount() == 0){
        return res.json({message: "User not found"});
    }

    const deleteuser = await pool.query(
        'DELETE FROM users WHERE id = $1',
        [id]
    )
    res.json({
        message: "User deleted successfully!"
    })
}