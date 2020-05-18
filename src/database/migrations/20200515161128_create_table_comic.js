
exports.up = function(knex) {
    return knex.schema.createTable('comic', function(table) {
        table.increments('id');
        table.decimal('price').notNullable();
        table.text('front_image');
        table.boolean('status').defaultTo(true);
        table.date('purchase_date').notNullable();
        table.text('title').notNullable();
        table.integer('collection_id').defaultTo(null);
        
        table.foreign('collection_id').references('id').inTable('collection');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('comic');
};
