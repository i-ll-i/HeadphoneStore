const _express = require('express');
const _cors = require('cors');

const _db = require('./ConnData');

const _app = _express();
const _router = _express.Router();

let _corsOptions = {
    origin: 'http://localhost:3001'
};

_app.use(_cors(_corsOptions));

_app.use(_express.json());

_app.use(_express.urlencoded({ extended: true }));

require('./routing/headphones.js')(_app);

_db._sequelize.sync().then(() => {
    _app.listen(3001, () => {
        console.log('Server started successfully!');        
    });
});