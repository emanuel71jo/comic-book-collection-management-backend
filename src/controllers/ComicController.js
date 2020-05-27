
const knex = require('../database/connection');

module.exports = {
    async index( req, res, next ) {
        try {

            const {
                title = null,
                collection_id = null,
                status = null,
            } = req.query;

            const query = knex('comic');

            if(title){
                query.where("title", title);
            }else if(collection_id){
                query.where("collection_id", collection_id);
            }else if(status){
                query.where("status", status);
            }

            const results = await query;

            return res.json(results);
        } catch (error) {
            next(error);
        }
    },
    async create( req, res, next) {

        try {

            const { price,
                    month,
                    year, 
                    title, 
                    collection_id = null, 
                    name = null,
                    publishing_company = null,
                } = req.body;

            const file = req.file.path;
            
            const query = knex('comic');

            if (!collection_id && name && publishing_company) {
                const [ id ] = await knex('collection').insert({ name, publishing_company });
                query.insert({
                    price,
                    file,
                    month,
                    year,
                    title,
                    collection_id: id,
                });
            }else if(!collection_id){
                query.insert({
                    price,
                    file,
                    month,
                    year,
                    title 
                });
            }else{
                query.insert({
                    price,
                    file,
                    month,
                    year,
                    title,
                    collection_id
                });
            }

            const results = await query;

            return res.status(201).send(results);
        } catch (error) {
            next(error);
        }

    },
    async delete( req, res, next ) {
        try {
            const { id } = req.params;

            let results;

            const comic_is_reading = await knex('reading')
                .whereNull('evaluation')
                .where('comic_id', id)
                .count('*');
            
            if(comic_is_reading[0]['count(*)'] !== 0){
                results = {
                    message: 'Not permission for remove a comic because this comic is reading'
                }
                return res.status(202).send(results);
            }

            const comic_id_loan = await knex('loan')
                .whereNull('date_devolution')
                .where('comic_id', id)
                .count('*');

            if(comic_id_loan[0]['count(*)'] !== 0){
                results = {
                    message: 'Not permission for remove a comic because this comic is loaning'
                }
                return res.status(202).send(results);
            }
            
            await knex("comic")
                .where({ id })
                .where("status", 1)
                .del();
            
            results = {
                message: 'Comic removed with success'
            }
            
            return res.send(results);

        } catch (error) {
            next(error);
        }
    },
}