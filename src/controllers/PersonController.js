
const knex = require('../database/connection');

module.exports = {
    async index ( req, res, next ) {
        try {
            
            const people = await knex('person').where('type_person', 0);

            const results = {
                lenght: people.length,
                people: people.map((person) => {
                    return {
                        name: person.name,
                        cpf: person.cpf,
                    }
                }),
            }

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

}