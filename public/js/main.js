// xhr request
function request (url, cb) {
  var xhr = new XMLHttpRequest(); //eslint-disable-line
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cb(null, xhr.responseText);
    } else {
      cb('error' + xhr.responseType); //eslint-disable-line
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}

function populateDom (err, data) {
  if (err) {
    console.log('error massage from main.js');
  } else {
    var allOrder = JSON.parse(data);
    var table = document.getElementById('order-table');
    // create a row in the table for each user input returned from the Database
    allOrder.forEach(function (userInput) {
      var row = document.createElement('tr');

      // create the value for the name of the inputter
      var name = document.createElement('td');
      name.className = 'td-name';
      name.innerHTML = userInput.name;
      row.appendChild(name);
      // table.appendChild(row);

      // create the value for the name of the food
      var food = document.createElement('td');
      food.innerHTML = userInput.food_name;
      row.appendChild(food);
      // table.appendChild(row);

      // create the value for the price
      var price = document.createElement('td');
      price.innerHTML = userInput.price;
      row.appendChild(price);

      table.appendChild(row);
    });
  }
}

request('/allOrder', populateDom);
