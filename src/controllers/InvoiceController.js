
const knex = require("../database/connection")

module.exports = {
    async index ( req, res, next ) {
        try {

            const { month = null, year = null } = req.query;

            const query = knex('comic').select('price').select('month').select('year');

            if(month){
                query.where('month', month);
            }
            if(year){
                query.where('year', year);
            }
            
            const results = await query;

            res.send(results);

        } catch (error) {
            next(error);
        }
    },
}