const dbconnection = require('../database/db_connection.js');

function setData (body, cb) {
  const dataObj = body.split('&').reduce((acc, item) => {
    const keyValue = item.split('=');
    if (keyValue[1]) {
      acc[keyValue[0]] = keyValue[1];
    }
    return acc;
  }, {});

  dbconnection.query(`INSERT INTO foodtype (food_name, price, user_id) 
                    VALUES ('${dataObj.foodName}', '${dataObj.price}', 
                    (SELECT users.id FROM users WHERE users.name = '${dataObj.name}'))`,
                    (err, res) => {
                      if (err) {
                        cb(err);
                      } else {
                        cb(null, res);
                      }
                    });
}

module.exports = setData;
