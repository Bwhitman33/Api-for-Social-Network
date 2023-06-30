const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost/Social-Network-API';

connect(connectionString);

module.exports = connection;