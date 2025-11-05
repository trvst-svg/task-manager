import express from 'express';
const app = express();

import taskRoutes from './routes/routes.user.js';
import userRoutes from './routes/routes.user.js';
import adminRoutes from './routes/routes.admin.js';

const port = 5000;

app.use(express.json);

app.use('/taskmanager/api/user', userRoutes);
app.use('/taskmanager/api/admin', adminRoutes)
app.use('/taskmanager/api/tasks', taskRoutes);

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
