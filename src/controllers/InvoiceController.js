
module.exports = {
    async index ( req, res ) {
        return res.json({
            message: "list all of the invoice"
        })
    },
    async store ( req, res ) {
        return res.json({
            message: "list one of options, month or year"
        })
    },
    async update ( req, res ) {
        return res.json({
            message: "updated a invoice"
        })
    }
}