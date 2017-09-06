const test = require('tape');
// var sql = require('../database/db_build.sql');

const connection = require('../database/db_connection.js');

test('Testing database connection', (t) => {
  const sql = '';
  connection.query(sql, (err, res) => {
    if (err) {
      t.notOk(!err, err);
      t.end();
    } else {
      t.equal(res != null, true, 'Should not be empty');
      t.end();
    }
  });
});

test('Testing select queries on users', (t) => {
  const sql = 'SELECT * FROM users';
  connection.query(sql, (err, res) => {
    if (err) {
      t.notOk(!err, err);
      t.end();
    } else {
      t.equal(res.rows.length, 16, 'Should not be empty');
      t.end();
      connection.end();
    }
  });
});

test('Testing select queries on foodtype', (t) => {
  const sql = 'SELECT * FROM foodtype';
  connection.query(sql, (err, res) => {
    if (err) {
      t.notOk(!err, err);
      t.end();
    } else {
      t.equal(res.rows.length, 4, 'Should not be empty');
      t.end();
      connection.end();
    }
  });
});

test('Testing select queries on up_votes', (t) => {
  const sql = 'SELECT * FROM up_votes';
  connection.query(sql, (err, res) => {
    if (err) {
      t.notOk(!err, err);
      t.end();
    } else {
      t.equal(res.rows.length, 5, 'Should not be empty');
      t.end();
      connection.end();
    }
  });
});

test('Testing INSERT queries on users', (t) => {
  const sql = 'INSERT INTO users (name) VALUES (\'mhd\')';
  connection.query(sql, (err, res) => {
    if (err) {
      t.notOk(!err, err);
      t.end();
    } else {
      t.equal(res.rows.length, 0, 'Should not be empty');
      console.log(res.rows.length, 'mahmoud');
      t.end();
      connection.end();
    }
  });
});
