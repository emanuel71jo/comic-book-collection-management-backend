
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('person').del()
    .then(function () {
      // Inserts seed entries
      return knex('person').insert([
          {cpf: '12345678910', name: 'Pedro', type_person: '0'},
          {cpf: '45612378920', name: 'Maria', type_person: '0'},
          {cpf: '15912345655', name: 'Jose', type_person: '1'},
          {cpf: '96385274112', name: 'Joao', type_person: '1'},
          {cpf: '10205010200', name: 'Emanuel', type_person: '0'},
          {cpf: '14523652110', name: 'Adrielly', type_person: '1'},
          {cpf: '25612385265', name: 'Carlos', type_person: '1'},
          {cpf: '45685248952', name: 'Jardel', type_person: '0'},
          {cpf: '10203015962', name: 'Gustavo', type_person: '1'},
          {cpf: '10203015945', name: 'Janderson', type_person: '1'},
          {cpf: '10352015962', name: 'Bruno', type_person: '1'},
          {cpf: '52203015962', name: 'Antonio', type_person: '1'},
          {cpf: '95852015962', name: 'Joana', type_person: '0'},
          {cpf: '15268015962', name: 'Henrique', type_person: '1'},
          {cpf: '11122233322', name: 'Dijay', type_person: '1'}
      ]);
    });
};

