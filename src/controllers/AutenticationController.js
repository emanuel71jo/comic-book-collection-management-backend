const knex = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    async register ( req, res, next ) {
        try {

            const { cpf, name, password } = req.body;

            
            const hash_password = await bcrypt.hash(password, 10);
            
            await knex('person').insert({ cpf, name, type_person: 1});
            await knex('user').insert({user_cpf: cpf, hash_password, permission: 1});

            return res.send();
            
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
                const token = jwt.sign({ cpf }, '12345', { expiresIn: '1h'});
                return res.send({token});
            }
            return res.status(401).send({ error: 'Falha na autenticação'});
            
        } catch (error) {
            next(error);
        }
    }
}