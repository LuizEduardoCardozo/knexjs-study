import db from '../database';

export async function userTaskByUserId(user_id: string): Promise<any[]> {

	const taskes = await db.select('users.user', 'users.email', 'users_taskes.todo', 'users_taskes.status')
		.from('users')
		.where('users.id', user_id)
		.join('users_taskes', function() {
			this.on('users.id', '=', 'users_taskes.user_id');
		});
	/*
	taskes.map(task => {
		task.id = undefined;
		task.password = undefined;
		task.role = undefined;
		task.user_id = undefined;
	});
    */
	return taskes;

}