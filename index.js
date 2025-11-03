import express from 'express';
const app = express();
import { Router } from 'express';
import authRoutes from './routes/routes.tasks.js';
import taskRoutes from './routes/routes.user.js';
import userRoutes from './routes/routes.user.js';
const port = 5000;

app.use(express.json);
app.use('/taskmanager/api/auth', authRoutes);
app.use('/taskmanager/api/tasks', taskRoutes);
app.use('/taskmanager/api/user', userRoutes);

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
