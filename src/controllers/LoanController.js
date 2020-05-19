
const knex = require('../database/connection');

module.exports = {
    async index ( req, res, next ) {
        try {

            const { filter } = req.query;

            const query = knex('loan');

            if(filter === 'open'){
                query.whereNull("date_devolution");
            }
            if(filter === 'closed'){
                query.whereNotNull("date_devolution");
            }

            const results = await query;

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
    async delete ( req, res, next ) {
        try {
            const { comic_id, date_loan } = req.body;

            await knex('loan')
                .where('comic_id', comic_id)
                .where('date_loan', date_loan)
                .del();

            return res.send();

        } catch (error) {
            next(error);
        }
    },
    async update ( req, res, next ) {
        try {
            
            const { comic_id, date_loan } = req.body;

            const today = new Date();
            const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const date_devolution = date + ' ' + time;

            await knex('loan')
                .update("date_devolution", date_devolution)
                .where("comic_id", comic_id)
                .where("date_loan", date_loan);

            return res.send();
            
        } catch (error) {
            next(error);
        }
    }
}