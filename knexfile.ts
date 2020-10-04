import path from 'path';

module.exports = {
	client: 'sqlite3',
	connection: {
		filename: path.join(__dirname, 'src', 'database', 'database.sqlite'),
	},
	useNullAsDefault: true,
	migrations: {
		directory: path.join(__dirname, 'src', 'database', 'migrations')
	},
};
