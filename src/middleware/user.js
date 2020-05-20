
module.exports = ( req, res, next ) => {
    
    const { permission } = req.user;

    if(!permission){
        next();
    }
    return res.status(401).send({error: 'Não autorizado'});
}