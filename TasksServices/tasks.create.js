import pool from "../database/pool.js";

export default function create(req, res){
    const {task, task_status, task_assigned_date, task_due_date} = req.body;
    if(!task, !task_status, !task_assigned_date, !task_due_date){
        return res.json({
            message: "Missing fields"
        });
    }
    const createTask = pool.query(
        'INSERT INTO tasks(task, task_status, task_assigned_date, task_due_date), VALUES($1, $2, $3, $4)',
        [task, task_status, task_assigned_date, task_due_date]
    )
    res.json({
        message: "Task created successfully"
    })
}