
const knex = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
    async index ( req, res, next ) {
        try {

            const results = await knex('user');

            return res.send(results);
            
        } catch (error) {
            next(error);
        }
    },
    async create ( req, res, next ) {
        try {
            
            const { cpf, name, password, permission } = req.body;

            
            const hash_password = await bcrypt.hash(password, 10);
            
            await knex('person').insert({ cpf, name, type_person: 1});
            await knex('user').insert({user_cpf: cpf, hash_password, permission});

            return res.send();

        } catch (error) {
            next(error);
        }
    },
    async delete ( req, res, next ) {
        try {
            const { cpf } = req.params;

            await knex('person').where({ cpf }).del();

            return res.send();

        } catch (error) {
            next(error);
        }
    },
}