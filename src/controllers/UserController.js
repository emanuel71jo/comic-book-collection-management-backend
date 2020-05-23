
const knex = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
    async index ( req, res, next ) {
        try {

            const users = await knex('user')
                .join('person', 'user.user_cpf', '=', 'person.cpf')
                .select('person.cpf', 'user.permission', 'person.name');

            const results = {
                lenght: users.length,
                users: users.map((user) => {
                    return {
                        name: user.name,
                        cpf: user.cpf,
                        permission: user.permission
                    }
                }),
            }

            return res.send(results);
            
        } catch (error) {
            next(error);
        }
    },
    async create ( req, res, next ) {
        try {
            
            const { cpf, name, password, permission } = req.body;

            
            const hash_password = await bcrypt.hash(password, 10);
            
            await knex('person').insert({ cpf, name, type_person: 1});
            await knex('user').insert({user_cpf: cpf, hash_password, permission});

            const results = {
                message: 'User created with success'
            }

            return res.status(201).send(results);

        } catch (error) {
            next(error);
        }
    },
    async delete ( req, res, next ) {
        try {
            const { cpf } = req.params;

            await knex('person').where({ cpf }).del();

            const results = {
                message: 'User removed with success'
            }

            return res.send(results);

        } catch (error) {
            next(error);
        }
    },
}