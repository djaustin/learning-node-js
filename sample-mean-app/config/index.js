const config = require('./config');
const mongo = config.mongo;
module.exports = Object.create(config);

module.exports.getDbConnectionString = function(){
  // Credentials like this should obviously not be stored in plaintext config file in prod
  return `mongodb://${mongo.username}:${mongo.password}@${mongo.hostname}:${mongo.port}/${mongo.dbName}`;
};
