const Airport = require("../models/airport");
const Sequelize = require("sequelize");
const City = require("../models/city");
const country = require("../models/country");
const city = require("../models/city");
const airport = require("../models/airport");
const { response } = require("express");

const getdata = async (req, res, next) => {
  let airport_data = {};
  let address_data;

  Airport.sync()
    .then(() => {
      return Airport.findOne({
        attributes: [
          "id",
          "icao_code",
          "iata_code",
          "name",
          "type",
          "latitude_deg",
          "longitude_deg",
          "elevation_ft",
        ],

        /*include: [
          {
            model: city,
            attributes: [
              "id",
              "name",
              "country_id",
              "is_active",
              "lat",
              "long",
            ],
            as: "city",
          },
          {
            model: country,
            attributes: [
              "id",
              "name",
              "country_code_two",
              "country_code_three",
              "mobile_code",
              "continent_id",
            ],
            as: "country",
          },
        ],*/

        where: { iata_code: req.params.id },
      });
    })
    .then((airport) => {
      airport_data["airport"] = airport.dataValues;
      return Airport.findOne({
        attributes: [],
        include: [
          {
            model: city,
            attributes: [
              "id",
              "name",
              "country_id",
              "is_active",
              "lat",
              "long",
            ],
            as: "city",
          },
          {
            model: country,
            attributes: [
              "id",
              "name",
              "country_code_two",
              "country_code_three",
              "mobile_code",
              "continent_id",
            ],
            as: "country",
          },
        ],
        where: { iata_code: req.params.id },
      });
    })
    .then((address) => {
      // airport = { ...airport, address };
      airport_data.airport["address"] = address;
      return { ...airport_data };
    })
    .then((data) => {
      res.send(data);
    })

    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getdata };
