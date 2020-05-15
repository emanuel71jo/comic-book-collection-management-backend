
module.exports = {
    async index ( req, res ) {
        return res.json({
            message: "list all colletion"
        })
    },
    async delete ( req, res ) {
        return res.json({
            message: "removed a colletion"
        });
    },
    async update ( req, res ) {
        return res.json({
            message: "updated a colletion"
        })
    }
}