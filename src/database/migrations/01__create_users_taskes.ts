import Knex from 'knex';

export async function up( knex: Knex ) {
	return knex.schema.createTable('users_taskes', table => {
		table.integer('id').primary();
		table.string('todo').notNullable();
		table.integer('status')
			.notNullable()
			.defaultTo(0);
		table.integer('user_id')
			.notNullable();
		table.foreign('user_id')
			.references('id')
			.inTable('users')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
}

export async function down( knex: Knex ) {
	return knex.schema.dropTable('users_taskes');
}
