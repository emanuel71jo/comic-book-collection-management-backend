
module.exports = {
    async index ( req, res ) {
        return res.json({
            message: "list all of the comic"
        })
    },
    async store ( req, res ) {
        return res.json({
            message: "list one of options"
        })
    },
    async create ( req, res ) {
        return res.json({
            message: "creted a new comic"
        });
    },
    async delete ( req, res ) {
        return res.json({
            message: "removed one of the comic"
        });
    },
    async update ( req, res ) {
        return res.json({
            message: "updated a comic"
        })
    }
}