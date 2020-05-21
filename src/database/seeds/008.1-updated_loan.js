
exports.seed = function(knex) {
  return knex('loan')
    .update('date_devolution', knex.fn.now())
    .where('comic_id', 1);
};
