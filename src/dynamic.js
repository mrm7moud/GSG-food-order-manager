const dbconnection = require('../database/db_connection.js');

let data = {};

data.getData = (callback) => {
  dbconnection.query(`SELECT food_name, name, price
    FROM foodtype
    INNER JOIN users
    ON (foodtype.user_id = users.id);`, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows);
    }
  });
};

module.exports = data;
