
module.exports = {
    async index ( req, res ) {
        return res.json({
            message: "list all of the loans"
        })
    },
    async store ( req, res ) {
        return res.json({
            message: "list one of options, close or open"
        })
    },
    async create ( req, res ) {
        return res.json({
            message: "creted a new loan"
        });
    },
    async delete ( req, res ) {
        return res.json({
            message: "removed one of the loan"
        });
    },
    async update ( req, res ) {
        return res.json({
            message: "updated a loan"
        })
    }
}