const  _Sequelize  = require('sequelize');
const _sequelize = new _Sequelize('headphonestore', 'root', 'Dev$010@ad', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const _db = {};

_db._Sequelize = _Sequelize;
_db._sequelize = _sequelize;

_db._headphones = require('./models/headphones')(_sequelize, _Sequelize);

module.exports = _db;