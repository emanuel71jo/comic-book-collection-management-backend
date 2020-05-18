
const knex = require('../database/connection');

module.exports = {
    async index ( req, res, next ) {
        try {

            const results = await knex('loan');

            return res.send(results);

        } catch (error) {
            next(error);
        }
    },
    async create ( req, res, next ) {
        try {
            
            const { comic_id, user_cpf, person_cpf, name = null } = req.body;

            if(name){
                await knex('person').insert({cpf: person_cpf, name, type_person: 0});
            }

            await knex('loan').insert({comic_id, user_cpf, person_cpf});

            return res.send();

        } catch (error) {
            next(error);
        }
    },
    async update ( req, res ) {
        return res.json({
            message: "updated a loan"
        })
    }
}