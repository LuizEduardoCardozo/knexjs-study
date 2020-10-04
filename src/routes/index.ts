import Router from 'express';

import { create, login, createTask, getUserTaskByUserId } from '../controllers/UserController';

const router = Router();

router.post('/create', create);
router.post('/login', login);
router.post('/task', createTask);
router.get('/task', getUserTaskByUserId);


export default router;
