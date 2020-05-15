
exports.up = function(knex) {
    return knex.schema.createTable('collection', function(table) {
        table.increments('id');
        table.text('name').notNullable();
        table.text('publishing_company').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('collection');
};
