
const knex = require('../database/connection');

module.exports = {
    async index(req, res) {
        try {

            const {
                title = null,
                collection_id = null,
                status = null
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
    async create(req, res, next) {

        try {

            const { price,
                    front_image = null, 
                    purchase_date, 
                    title, 
                    collection_id = null, 
                    name = null,
                    publishing_company = null
                } = req.body;

            const query = knex('comic');

            if (!collection_id && name && publishing_company) {
                const [ id ] = await knex('collection').insert({ name, publishing_company });
                query.insert({
                    price,
                    front_image,
                    purchase_date,
                    title,
                    collection_id: id,
                });
            }else if(!collection_id){
                query.insert({
                    price,
                    front_image,
                    purchase_date,
                    title 
                });
            }else{
                query.insert({
                    price,
                    front_image,
                    purchase_date,
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
    async delete(req, res, next) {
        try {
            const { id } = req.params;

            await knex("comic")
                .where({ id })
                .del();
            
            return res.send();

        } catch (error) {
            next(error);
        }
    },
    async update(req, res) {
        return res.json({
            message: "updated a comic"
        })
    }
}