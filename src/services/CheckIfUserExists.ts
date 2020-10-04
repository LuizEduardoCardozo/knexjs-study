import db from '../database';

interface UserInferface {
    id: number;
    user: string;
    email: string;
    password: string;
}

export async function UserExists(email: string): Promise<UserInferface> {
	const user = await db('users').where('email', email);
	return user[0];
}