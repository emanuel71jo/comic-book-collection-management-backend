exports.seed = function(knex) {

  return knex('reading')
    .update('evaluation', 'boa')
    .where('comic_id', 13);
};
