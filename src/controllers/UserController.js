
const knex = require('../database/connection');

module.exports = {
    async index ( req, res, next ) {
        try {

            const results = knex('user');

            return res.send(results);
            
        } catch (error) {
            next(error);
        }
    },
    async create ( req, res ) {
        return res.json({
            message: "creted a new user"
        });
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