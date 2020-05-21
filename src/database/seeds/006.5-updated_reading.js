exports.seed = function(knex) {

  return knex('reading')
    .update('evaluation', 'ruim')
    .where('comic_id', 14);
};
