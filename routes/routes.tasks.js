import e from "express";
import create from '../TasksServices/tasks.create.js'
import getTasks from '../TasksServices/tasks.getAll.js'
import auth from '../AuthenticationServices/auth.verifyuser.js';

const router = e.Router();

router.post('/create', auth, create);
router.get('/getTasks', auth, getTasks);


export default router;
