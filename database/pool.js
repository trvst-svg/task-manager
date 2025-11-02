import { Pool } from "pg";

const pool = new Pool({
    user: 'suppu',
    host: 'localhost',
    database: 'taskmanager',
    password: '',
    port: 5432
});

pool.on('error', (err, client) => {
    console.error({error: err});
    process.exit(-1);
})

export default pool;