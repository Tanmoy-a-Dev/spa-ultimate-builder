const Sequelize = require('sequelize');
const env = process.env.NODE_ENV;
const config = require('./config/db_config');
const { username, password, database, host, dialect } = config[env];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
