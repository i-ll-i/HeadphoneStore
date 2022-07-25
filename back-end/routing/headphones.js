module.exports = _app => {

    const _controllers = require('../controllers/headphone.js');
    
    let _router = require('express').Router();

    _router.post('/add', _controllers.create);

    _app.use('/api/headphones', _router);

};