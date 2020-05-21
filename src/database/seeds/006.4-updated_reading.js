exports.seed = function(knex) {

  return knex('reading')
    .update('evaluation', 'media')
    .where('comic_id', 21);
};
