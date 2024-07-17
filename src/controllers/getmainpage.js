var path = require("path");

const getmainpage = (req, res, next) => {
  console.log();
  var indexPath = path.join(__dirname, "../Pages/mainpage.html");
  res.sendFile(indexPath);
};

module.exports = { getmainpage };
