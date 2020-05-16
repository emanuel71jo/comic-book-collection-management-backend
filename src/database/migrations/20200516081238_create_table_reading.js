
exports.up = function(knex) {
    return knex.schema.createTable('reading', function(table) {
        table.integer('comic_id').primary();
        table.text('user_cpf').primary();
        table.date('reading_date').notNullable();
        table.text('evaluation');

        table.foreign('comic_id').references('id').inTable('comic');
        table.foreign('user_cpf').references('user_cpf').inTable('user');
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('reading');
};
