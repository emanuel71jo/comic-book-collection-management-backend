
exports.seed = function(knex) {
    // Inserts seed entries
    return knex('loan').insert([
      {comic_id: '08', user_cpf: '14523652110', person_cpf: '10205010200'},
      {comic_id: '09', user_cpf: '10203015945', person_cpf: '95852015962'},
      {comic_id: '10', user_cpf: '14523652110', person_cpf: '10205010200'},
      {comic_id: '11', user_cpf: '15912345655', person_cpf: '12345678910'},
      {comic_id: '16', user_cpf: '15912345655', person_cpf: '95852015962'},
      {comic_id: '17', user_cpf: '14523652110', person_cpf: '12345678910'},
      {comic_id: '18', user_cpf: '10203015945', person_cpf: '10205010200'},
      {comic_id: '19', user_cpf: '10203015945', person_cpf: '45685248952'},
      {comic_id: '20', user_cpf: '15912345655', person_cpf: '45685248952'},
      {comic_id: '22', user_cpf: '15268015962', person_cpf: '10205010200'}
    ]);
};

