const knex = require('../database/connection');

module.exports = {
    async index ( req, res ) {
        const results = await knex("collection");

        return res.json(results);
    },
    async create ( req, res, next ) {

        try {
            
            const { name, publishing_company} = req.body;

            await knex('collection').insert({ name, publishing_company });

            return res.status(201).send();

        } catch (error) {
            next(error);
        }

    },
    async delete ( req, res, next) {
        
    },
    async update ( req, res, next) {
        try {

            const { name, publishing_company} = req.body;
            const { id } = req.params;

            await knex('collection')
                .update({ name, publishing_company})
                .where({ id });

            return res.send();

        } catch (error) {
            next(error);
        }
    }
}