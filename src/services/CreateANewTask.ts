import db from '../database';

interface TaskInteface {
    todo: string;
    user_id: number;
}

export async function CreateNewTask(params: TaskInteface): Promise<number[]> {
	const task = await db('users_taskes').insert(params);
	return task;
}
