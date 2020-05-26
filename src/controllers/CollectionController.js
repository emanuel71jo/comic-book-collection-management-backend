const knex = require('../database/connection');

module.exports = {
    async index ( req, res, next ) {
        try {

            const collections = await knex('collection');
            const comics = await knex('comic');

            const results = {
                length: collections.length,
                collections: collections.map(
                    (collection) => {

                        const collection_comics = comics.filter(
                            (comic) => {
                                return comic.collection_id === collection.id;
                            }
                        )

                        return {
                            collection_id: collection.id,
                            collection_name: collection.name,
                            publishing_company: collection.publishing_company,
                            length_comics: collection_comics.length,
                            comics: collection_comics.map(
                                (collection_comic) => {
                                    return {
                                        title: collection_comic.title,
                                        status: collection_comic.status,
                                        file: collection_comic.file
                                    }
                                }
                            )
                        };
                    }
                )
            }
                
            return res.json(results);

        } catch (error) {
            next(error);
        }
    },
    async delete ( req, res, next) {
        try {
            
            const { id } = req.params;

            await knex('collection')
                .where({ id })
                .del();

            return res.send();

        } catch (error) {
            next(error);
        }
    },

}