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

            let results;

            const comic = await knex('comic').where('id', comic_id);

            if(comic.length === 0){
                results = {
                    message: 'Comic not found'
                }

                return res.status(202).send(results);
            }

            if(!comic[0].status){
                results = {
                    message: 'Comic not available'
                }

                return res.status(202).send(results);
            }

            await knex('reading')
                .insert({
                    comic_id,
                    user_cpf
                });
            
            results = {
                message: 'Reading initial with success'
            }

            return res.send(results);

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

            const results = {
                message: 'Reading end with success'
            }

            return res.send(results);

        } catch (error) {
            next(error);
        }
    }
}