
const knex = require('../database/connection');

module.exports = {
    async index ( req, res, next ) {
        try {
            
            const results = await knex('person');

            return res.send(results);

        } catch (error) {
            next(error);
        }
    },
    async delete ( req, res ) {
        return res.json({
            message: "removed a person"
        });
    },
    async update ( req, res ) {
        return res.json({
            message: "updated a person"
        })
    }
}