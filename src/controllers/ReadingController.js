const knex = require('../database/connection');

module.exports = {
    async index ( req, res, next ) {
        try {
            
            const results = await knex('reading');

            return res.send(results);

        } catch (error) {
            next(error);
        }
    },

    async create ( req, res, next ) {
        try {
            
            const { comic_id, user_cpf } = req.body;

            await knex('reading')
                .insert({
                    comic_id,
                    user_cpf
                });

            return res.send();

        } catch (error) {
            next(error);
        }
    },
    async delete ( req, res, next ) {
        try {
            
            const { comic_id, user_cpf } = req.body;

            await knex('reading')
                .where('comic_id', comic_id)
                .where('user_cpf', user_cpf)
                .del();

            return res.send();

        } catch (error) {
            next(error);
        }
    },
    async update ( req, res, next ) {
        try {
            
            const { comic_id, user_cpf, evaluation } = req.body;

            await knex('reading')
                .update('evaluation', evaluation)
                .where('user_cpf', user_cpf)
                .where('comic_id', comic_id);

            return res.send();

        } catch (error) {
            next(error);
        }
    }
}