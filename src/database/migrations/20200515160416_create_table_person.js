
exports.up = function(knex) {
    return knex.schema.createTable('person', function(table) {
        table.text('cpf').primary();
        table.text('name').notNullable();
        table.boolean('type_person').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('person');
};
