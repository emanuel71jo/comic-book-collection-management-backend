
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('loan').del()
    .then(function () {
      // Inserts seed entries
      return knex('loan').insert([
        {comic_id: '1', user_cpf: '11122233322', person_cpf: '12345678910'},
        {comic_id: '3', user_cpf: '96385274112', person_cpf: '45612378920'},
        {comic_id: '5', user_cpf: '11122233322', person_cpf: '12345678910'},
        {comic_id: '7', user_cpf: '96385274112', person_cpf: '12345678910'}
      ]);
    });
};

