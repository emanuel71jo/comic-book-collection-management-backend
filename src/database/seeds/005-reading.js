
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reading').del()
    .then(function () {
      // Inserts seed entries
      return knex('reading').insert([   
        {comic_id: '01', user_cpf: '10203015962'},
        {comic_id: '02', user_cpf: '10352015962'},
        {comic_id: '06', user_cpf: '10352015962'},
        {comic_id: '07', user_cpf: '10203015962'},
        {comic_id: '12', user_cpf: '52203015962'},
        {comic_id: '13', user_cpf: '52203015962'},
        {comic_id: '14', user_cpf: '10203015962'},
        {comic_id: '15', user_cpf: '25612385265'},
        {comic_id: '21', user_cpf: '25612385265'}
      ]);
    });
};
