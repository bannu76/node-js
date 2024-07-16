const express = require("express");
var cors = require("cors");
require("dotenv").config();

const sequelize = require("./utils/database");

const HavoiData = require("./routes/havoi");

const app = express();
app.use(express.json());
app.use(cors());

const initializeDatabaseServer = async () => {
  try {
    sequelize.sync().then((result) => {
      console.log("result");
    });

    app.listen(process.env.PORT, () => {
      console.log("server is running..." + process.env.PORT);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.use("/", HavoiData);

initializeDatabaseServer();
