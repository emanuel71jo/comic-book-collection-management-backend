
module.exports = ( req, res, next ) => {
    
    const { permission } = req.user;

    if(!permission){
        return res.status(401).send({error: 'Unauthorized'});
    }
    next();
}