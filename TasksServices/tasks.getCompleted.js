import pool from "../database/pool.js";

export default async function getCompleted(req, res){
    const id = req.body.id;
    const status = 'complete'

    const tasks = pool.query(
        'SELECT task, task_status, task_assigned_date, task_due_date FROM tasks WHERE user_id = $1 AND task_status = $2',
        [id]
    )

    if(tasks.rowCount() == 0){
        return res.json({
            message: "No tasks found"
        })
    }

    return res.json(tasks);
}