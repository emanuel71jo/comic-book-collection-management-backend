
const knex = require('../database/connection');

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
            
            await knex('person').insert({ cpf, name, type_person: 1});
            
            await knex('user').insert({user_cpf: cpf, password, permission});

            return res.send();

        } catch (error) {
            next(error);
        }
    },
    async delete ( req, res ) {
        return res.json({
            message: "removed one user"
        });
    },
    async update ( req, res ) {
        return res.json({
            message: "updated a user"
        })
    }
}