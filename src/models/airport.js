const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const city = require("./city");
const country = require("./country");
const airport = sequelize.define(
  "airport",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    icao_code: { type: Sequelize.STRING },
    iata_code: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING },
    type: { type: Sequelize.STRING },
    city_id: { type: Sequelize.INTEGER },
    country_id: { type: Sequelize.INTEGER },
    continent_id: { type: Sequelize.INTEGER },
    website_url: { type: Sequelize.STRING },
    created_at: { type: Sequelize.STRING },
    updated_at: { type: Sequelize.STRING },
    latitude_deg: { type: Sequelize.FLOAT },
    longitude: { type: Sequelize.FLOAT },
    elevation_ft: { type: Sequelize.INTEGER },
    wikipedia_link: { type: Sequelize.STRING },
  },
  { freezeTableName: true, timestamps: false, raw: true }
);

airport.belongsTo(city, { foreignKey: "city_id" });
airport.belongsTo(country, { foreignKey: "country_id" });

module.exports = airport;
