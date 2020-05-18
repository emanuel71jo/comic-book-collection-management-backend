const knex = require('../database/connection');

module.exports = {
    async index ( req, res, next ) {
        try {

            const results = await knex("collection");

            return res.json(results);

        } catch (error) {
            next(error);
        }
    },
    async delete ( req, res, next) {
        try {
            
            const { id } = req.params;

            await knex('collection')
                .where({ id })
                .del();

            return res.send();

        } catch (error) {
            next(error);
        }
    },

}