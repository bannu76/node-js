const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const airport = require("./airport");
const country = require("./country");

const city = sequelize.define(
  "city",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.STRING },
    alt_name: { type: Sequelize.STRING },
    country_id: { type: Sequelize.INTEGER },
    is_active: { type: Sequelize.STRING },
    created_at: { type: Sequelize.STRING },
    updated_at: { type: Sequelize.STRING },
    lat: { type: Sequelize.FLOAT },
    long: { type: Sequelize.FLOAT },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = city;
