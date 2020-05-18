
exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
        table.text('user_cpf').notNullable().primary();
        table.text('password').notNullable();
        table.boolean('permission').notNullable();

        table.foreign('user_cpf').references('cpf').inTable('person').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
