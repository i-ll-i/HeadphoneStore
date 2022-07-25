const _db = require('../ConnData');
const _headphones = _db._headphones;
const Op = _db._Sequelize.Op;

exports.create = ( req, res ) => {
    _headphones.create( req.body )
        .then( data => {
            res.send( data );
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
        });
};