
module.exports = {
    async index ( req, res ) {
        return res.json({
            message: "list all users"
        })
    },
    async create ( req, res ) {
        return res.json({
            message: "creted a new user"
        });
    },
    async delete ( req, res ) {
        return res.json({
            message: "removed one user"
        });
    },
    async update ( req, res ) {
        return res.json({
            message: "updated a user"
        })
    }
}