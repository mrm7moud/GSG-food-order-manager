const test = require('tape');
const shot = require('shot');
const router = require('../src/router.js');

test('Home route test', (t) => {
  shot.inject(router, {method: 'get', url: '/'}, (res) => {
    t.equal(res.statusCode, 200, 'respond with 200');
    t.end();
  });
});

test('Not Found test', (t) => {
  shot.inject(router, {method: 'get', url: '/kjadgkj'}, (res) => {
    t.equal(res.statusCode, 404, 'respond with 404');
    t.end();
  });
});

test('Public route test', (t) => {
  shot.inject(router, {method: 'get', url: '/index.html'}, (res) => {
    t.equal(res.statusCode, 200, 'public respond with 200');
    t.end();
  });
});

test('Public style route test', (t) => {
  shot.inject(router, {method: 'get', url: '/css/stylesheet.css'}, (res) => {
    t.equal(res.statusCode, 200, 'style respond with 200');
    t.end();
  });
});

test('Public js route test', (t) => {
  shot.inject(router, {method: 'get', url: '/js/main.js'}, (res) => {
    t.equal(res.statusCode, 200, 'js respond with 200');
    t.end();
  });
});
