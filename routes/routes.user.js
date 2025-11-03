import e from 'express';
import login from '../UserServices/userservices.login.js';
import signup from '../UserServices/userservices.signup.js';

const router = e.Router();

router.post('/signup', signup);
router.get('/login', login);

export default router;