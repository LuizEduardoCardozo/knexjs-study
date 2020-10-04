import { Request, Response } from 'express';
import { UserExists } from '../services/CheckIfUserExists';
import { CreateNewTask } from '../services/CreateANewTask';
import createNewUser from '../services/CreateNewUser';
import { userTaskByUserId } from '../services/GetUserTaskByUserId';

export async function create(req: Request, res: Response): Promise<Response<any>> {

	const {  user, email, password } = req.body;
    
	try {
		await createNewUser({  user, email, password });
	} catch (e) {
		console.log(e);
		return res.status(400).json(e);
	}

	return res.send();

}

export async function login(req: Request, res: Response): Promise<Response<any>> {
    
	const { email, passwords } = req.body;
	const user = await UserExists(email);

	if(user.password === passwords) {
		return res.json(user);
	}
    
	return res.send('User not found!');
}

export async function createTask(req: Request, res: Response): Promise<Response<any>> {

	const { user_id, todo } = req.body;
	const task = await CreateNewTask({ user_id, todo });

	if(!task) return res.status(400).json({ err: 'A task não pode ser criada!' });

	return res.send('');

}

export async function getUserTaskByUserId( req: Request, res: Response ): Promise<Response<any>> {
    
	const { user_id } = req.query;

	const taskes = await userTaskByUserId(user_id[0]);
    
	return res.json(taskes);
}
