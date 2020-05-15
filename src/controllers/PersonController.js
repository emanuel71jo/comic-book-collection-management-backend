
module.exports = {
    async index ( req, res ) {
        return res.json({
            message: "list all peaple"
        })
    },
    async delete ( req, res ) {
        return res.json({
            message: "removed a person"
        });
    },
    async update ( req, res ) {
        return res.json({
            message: "updated a person"
        })
    }
}