const knex = require('knex');
const configuration = require('../../knexfile');

const connectio = knex(configuration.development);

module.exports = connectio;