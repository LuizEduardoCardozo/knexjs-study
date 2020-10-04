import db from '../database';

interface User {
    user: string;
    email: string;
    password: string;
}


export default async function createNewUser(params: User): Promise<number[]> {

	const user = await db('users').insert(params);
	return user;

}