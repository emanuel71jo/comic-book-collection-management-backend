
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {

      // Passwords of users in list
      const passwords = [
        'jason',
        '12345',
        '12542',
        'djy12',
        'adr12',
        '10210',
        'maria',
        '10320',
        'toin1',
        'joao1',
      ];

      // Inserts seed entries
      return knex('user').insert([
        {user_cpf: '10203015945', hash_password: '$2b$10$Kz27l541NWbBy9mkCZqUbu4HAAG1CJmTGyMeAH4id3MljLV54ev7i', permission: '1'},
        {user_cpf: '10203015962', hash_password: '$2b$10$IhvLPpd6A.rX89MaQycBseQ/BV9Nrpi9PxyLmoF5P7UmOufdZGdee', permission: '0'},
        {user_cpf: '10352015962', hash_password: '$2b$10$5qhJli5rAOZk9/OzpTEVi.jFVBV9AFM/1/AkwSmboRvIPpZl5SZue', permission: '0'},
        {user_cpf: '11122233322', hash_password: '$2b$10$ZOaQ9JO6hhwDRENMm8VnreY24HNMleRYdl9c8ih8MuX38/IgMVTrq', permission: '1'},
        {user_cpf: '14523652110', hash_password: '$2b$10$pfRCX7btyXWcOWeNiIP/le2Pz/kCz4XtRp.k8CrhunplDe27FgoCS', permission: '1'},
        {user_cpf: '15268015962', hash_password: '$2b$10$0ZL3QBZz4XE38dCRPUKG4urgJw1G09uwlARZaiaLLH3qLFiCUJW/a', permission: '1'},
        {user_cpf: '15912345655', hash_password: '$2b$10$whec72TAtFWjKRSITOqte.zww/3rwvCd3jgWUXZd5AjBcstpPiADe', permission: '1'},
        {user_cpf: '25612385265', hash_password: '$2b$10$NIjlGAbGIVNOjLQSOJV85.K6FpKL1ikIcNk9.vKP8jXjEWHTDJ0tq', permission: '0'},
        {user_cpf: '52203015962', hash_password: '$2b$10$yXxQCidPJjs4ldq2.JtuXuh.hYpxLbrqmoM.SjJQVeesvbg24StDm', permission: '0'},
        {user_cpf: '96385274112', hash_password: '$2b$10$O6qr0TLadXW9hchECgHn6uThVRrVyFGyhL9i1ZtNFEjTcvgjjMzn.', permission: '1'}
      ]);
    });
};