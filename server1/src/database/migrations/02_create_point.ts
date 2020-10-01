import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('neighborhood').notNullable();
        table.string('uf').notNullable();
        table.decimal('city').notNullable();
        
        //chave estrageira
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
            
        //chave estrageira
        table.integer('services_id')
            .notNullable()
            .references('id')
            .inTable('services')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('points');
}