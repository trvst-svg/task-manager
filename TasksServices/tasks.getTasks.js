import pool from "../database/pool.js";

export default async function getTasks(req, res){
    const id = req.body.id;

    const tasks = pool.query(
        'SELECT task, task_status, task_assigned_date, task_due_date FROM tasks WHERE user_id = $1',
        [id]
    )

    if(tasks.rowCount() < 0){
        return res.json({
            message: "No tasks found"
        })
    }

    return tasks;
}