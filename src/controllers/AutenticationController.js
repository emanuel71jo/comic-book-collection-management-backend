const knex = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    async register ( req, res, next ) {
        try {

            const { cpf, name, password } = req.body;

            const consult = await knex('user').count();
            let result;

            if(consult[0]['count(*)'] !== 0){
                result = {
                    message: 'Impossible create a user because has already exists users in database'
                }
                return res.status(401).send(result);
            }
            
            const hash_password = await bcrypt.hash(password, 10);
            
            await knex('person').insert({ cpf, name, type_person: 1});
            await knex('user').insert({user_cpf: cpf, hash_password, permission: 1});

            result = {
                message: 'User registered with success',
                cpf: cpf
            };

            return res.status(201).send(result);
            
        } catch (error) {
            next(error);
        }
    },

    async autentication ( req, res, next ) {
        try {

            const { cpf, password } = req.body;
            
            const user = await knex('user').where("user_cpf", cpf);

            const auth = await bcrypt.compare(password, user[0].hash_password);


            if(auth){
                const token = jwt.sign( user[0], '12345', { expiresIn: '1h'});

                const result = {
                    cpf,
                    token
                };

                return res.send(result);
            }
            return res.status(401).send({ error: 'Unauthorized'});
            
        } catch (error) {
            next(error);
        }
    }
}