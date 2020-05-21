
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comic').del()
    .then(function () {
      // Inserts seed entries
      return knex('comic').insert([
        {month: 01, year: 2019, price: '15.00' , title: 'Naruto Classico'            , collection_id: '1'},
        {month: 01, year: 2019, price: '17.99' , title: 'Dragon Ball Z'              , collection_id: '2'},
        {month: 01, year: 2019, price: '8.50'  , title: 'Naruto Shippuden'           , collection_id: '1'},
        {month: 01, year: 2019, price: '12.45' , title: 'Super Onze Classico'        , collection_id: '3'},
        {month: 02, year: 2019, price: '20.00' , title: 'Super Onze Go'              , collection_id: '3'},
        {month: 02, year: 2019, price: '30.00' , title: 'Toy Store'},
        {month: 02, year: 2019, price: '15.99' , title: 'Dragon Ball Super'          , collection_id: '2'},
        {month: 02, year: 2019, price: '61.10' , title: 'A morte do Superman'        , collection_id: '4'},
        {month: 06, year: 2019, price: '61.10' , title: 'O homem de Aço'             , collection_id: '4'},
        {month: 06, year: 2019, price: '61.10' , title: 'A nova Fronteira'           , collection_id: '4'},
        {month: 06, year: 2019, price: '69.99' , title: 'Os 300 de Esparte'},
        {month: 06, year: 2019, price: '42.21' , title: 'Origem I'                   , collection_id: '5'},
        {month: 09, year: 2019, price: '45.59' , title: 'Origem II'                  , collection_id: '5'},
        {month: 09, year: 2019, price: '12.99' , title: 'O Cavaleiro das Trevas'     , collection_id: '6'},
        {month: 09, year: 2019, price: '35.99' , title: 'A Noite das Corujas'        , collection_id: '6'},
        {month: 09, year: 2019, price: '29.99' , title: 'Entre a Foice e o Martelo'  , collection_id: '7'},
        {month: 12, year: 2019, price: '25.40' , title: 'Reino do Amanhã'            , collection_id: '7'},
        {month: 12, year: 2019, price: '22.30' , title: 'Edição Especial de 30 anos' , collection_id: '8'},
        {month: 12, year: 2019, price: '19.30' , title: 'Preludio'                   , collection_id: '8'},
        {month: 12, year: 2019, price: '122.99', title: 'Origens Secretas'           , collection_id: '9'},
        {month: 01, year: 2020, price: '56.99' , title: 'Era da Destruição'          , collection_id: '9'},
        {month: 05, year: 2020, price: '54.00' , title: 'Canção do Silêncio'         , collection_id: '10'}
      ]);
    });
};
