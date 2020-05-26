
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
            let results = {};

            const user = await knex('user').where('user_cpf', cpf);

            if(user.length === 0){
                results = {
                    message: 'User not found',
                };

                return res.status(202).send(results);
            }

            const reading_user = await knex('reading')
                .where('user_cpf', cpf)
                .whereNull('evaluation');

            if(reading_user.length !== 0){
                results = {
                    message: 'Not permission for remove because this user is reading a comic',
                }

                return res.status(202).send(results);
            }

            const loans_user = await knex('loan')
                .where('user_cpf', cpf)
                .whereNull('date_devolution');

            if(loans_user.length !== 0){
                results = {
                    message: 'Not permission for remove because this user has any loan pending'
                };

                return res.status(202).send(results);
            }

            await knex('person').where({ cpf }).del();

            results = {
                message: 'User removed with success'
            }

            return res.send(results);

        } catch (error) {
            next(error);
        }
    },
}