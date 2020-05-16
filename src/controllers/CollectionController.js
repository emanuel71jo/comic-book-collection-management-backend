const knex = require('../database/connection');

module.exports = {
    async index ( req, res ) {
        const results = await knex("collection");

        return res.json(results);
    },
    async delete ( req, res ) {
        return res.json({
            message: "removed a colletion"
        });
    },
    async update ( req, res ) {
        return res.json({
            message: "updated a colletion"
        })
    }
}