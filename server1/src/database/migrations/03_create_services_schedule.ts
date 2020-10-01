import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('services_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();
        
        //chave estrageira
        table.integer('services_id')
            .notNullable()
            .references('id')
            .inTable('services')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        //chave estrangeira 2
        table.integer('points_id')
            .notNullable()
            .references('id')
            .inTable('points')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('services_schedule');
}