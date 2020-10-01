import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('services', table => {
        table.increments('id').primary();
        table.string('category').notNullable();
        table.decimal('cost').notNullable();
        
        //chave estrageira
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('services');
}