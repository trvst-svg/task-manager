import pool from "../database/pool.js";

export default async function create(req, res){
    try{
        const user_id = req.body.id;
        const {task, task_status, task_assigned_date, task_due_date} = req.body;
        if(!task, !task_status, !task_assigned_date, !task_due_date){
            return res.json({
                message: "Missing fields"
            });
        }
        const createTask = await pool.query(
            'INSERT INTO tasks(task, task_status, task_assigned_date, task_due_date, user_id), VALUES($1, $2, $3, $4, $5)',
            [task, task_status, task_assigned_date, task_due_date, user_id]
        )
        res.json({
            message: "Task created successfully"
    })}
    catch(e){
        res.json({
            message:"database error"
        })
    }
}