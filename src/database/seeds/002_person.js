
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('person').del()
    .then(function () {
      // Inserts seed entries
      return knex('person').insert([
        {
          cpf: "12345678910",
          name: "Pedro",
          type_person: false
        },
        {
          cpf: "45612378920",
          name: "Maria",
          type_person: false
        },
        {
          cpf: "15912345655",
          name: "Jose",
          type_person: false
        },
        {
          cpf: "96385274112",
          name: "Joao",
          type_person: true
        },
        {
          cpf: "10205010200",
          name: "Emanuel",
          type_person: true
        },
        {
          cpf: "14523652110",
          name: "Adrielly",
          type_person: true
        },
        {
          cpf: "25612385265",
          name: "Carlos",
          type_person: false
        },
        {
          cpf: "45685248952",
          name: "Jardel",
          type_person: false
        },

      ]);
    });
};
