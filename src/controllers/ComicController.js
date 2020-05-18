
const knex = require('../database/connection');

module.exports = {
    async index(req, res) {
        try {

            const results = await knex("comic");

            return res.json(results);
        } catch (error) {
            next(error);
        }
    },
    async store(req, res) {



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
    async delete(req, res) {
        return res.json({
            message: "removed one of the comic"
        });
    },
    async update(req, res) {
        return res.json({
            message: "updated a comic"
        })
    }
}