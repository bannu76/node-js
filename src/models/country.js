const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const country = sequelize.define(
  "country",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.STRING },
    alt_name: { type: Sequelize.STRING },
    country_code_two: { type: Sequelize.STRING },
    country_code_three: { type: Sequelize.STRING },
    flag_app: { type: Sequelize.STRING },
    mobile_code: { type: Sequelize.INTEGER },
    continent_id: { type: Sequelize.INTEGER },
    country_flag: { type: Sequelize.STRING },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = country;
