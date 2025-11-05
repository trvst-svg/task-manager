import pool from "../database/pool.js";

export default async function deleteTask(req, res){
    const id = req.body;

    const taskCheck = await pool.query(
        'SELECT * FROM tasks WHERE task_id = $1',
        [id]
    )

    if (taskCheck.rowCount == 0){
        return res.json({message: "Task not found"})
    }

    const del = await pool.query(
       'DELETE FROM tasks WHERE task_id = $1',
        [id]
    )
    res.json({message: "Task deleted successfully."})
}