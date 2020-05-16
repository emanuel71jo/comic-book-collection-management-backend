
exports.up = function(knex) {
    return knex.schema.createTable('loan', function(table) {
        table.date('date_loan').primary();
        table.date('date_devolucion');
        table.integer('comic_id').primary();
        table.text('user_cpf').notNullable();
        table.text('person_cpf').notNullable();

        table.foreign('comic_id').references('id').inTable('comic');
        table.foreign('user_cpf').references('user_cpf').inTable('user');
        table.foreign('person_cpf').references('cpf').inTable('person');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('loan');
};