
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('collection').del()
    .then(function () {
      // Inserts seed entries
      return knex('collection').insert([
        {name: 'Graphic Novels', publishing_company: 'DC'},
        {name: 'Naruto', publishing_company: 'Panini'},
        {name: 'Dragon Ball', publishing_company: 'Conrad'},
        {name: 'Super Onze', publishing_company: 'JBC'},
        {name: 'Wolverine Origem', publishing_company: 'Marvel'},
        {name: 'Batman', publishing_company: 'Marvel'},
        {name: 'Superman', publishing_company: 'DC'},
        {name: 'Sandman', publishing_company: 'Panini'},
        {name: 'BlackHammer', publishing_company: 'Intriseca'},
        {name: 'Oblivion Song', publishing_company: 'Intriseca'}
      ]);
    });
};

