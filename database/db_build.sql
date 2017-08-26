BEGIN;

DROP TABLE IF EXISTS foodtype, users, up_votes CASCADE;

CREATE TABLE users (
  id            serial        PRIMARY KEY,
  name    varchar(100)  NOT NULL
);

CREATE TABLE foodtype (
  id            serial        PRIMARY KEY,
  food_name  varchar(100)  NOT NULL,
  price        integer  NOT NULL,
  user_id     integer REFERENCES users(id) ON UPDATE CASCADE
);

CREATE TABLE up_votes (
  foodtype_id    integer REFERENCES foodtype(id) ON UPDATE CASCADE,
  user_id     integer REFERENCES users(id) ON UPDATE CASCADE
);

-- 1 TO MANY
INSERT INTO users(name) VALUES
('Abdallah'),
('Ahmed'),
('Eslam'),
('Aldahdouh'),
('Almadhoun'),
('Alwadia'),
('Moath'),
('Samer'),
('Walid'),
('Hana'),
('Qamar'),
('Ghadeer'),
('Aia'),
('Sohad'),
('kefah'),
('Salwa')
RETURNING ID;

-- ('Abdallah Al-Halees'),
-- ('Ahmed Ajour'),
-- ('Eslam Hugair'),
-- ('Mahmoud Aldahdouh'),
-- ('Mahmoud Almadhoun'),
-- ('Mahmoud Alwadia'),
-- ('Moath Alnajjar'),
-- ('Samer El-Aila'),
-- ('Walid Almeshwakhi'),
-- ('Hana Jebril'),
-- ('Qamar Alfalojy'),
-- ('Ghadeer Abdel-Nabi'),
-- ('Aia Abu Laila'),
-- ('Sohad Dader'),
-- ('kefah elhelou'),
-- ('Salwa Alnazly')

-- 1 TO 1
INSERT INTO foodtype(food_name, price, user_id) VALUES
('falfal', 1, 1),
('falfal with salta', 1, 2),
('falfal with fol', 1, 3),
('falfal with hamos', 1, 4)
RETURNING ID;



-- MANY TO MANY
INSERT INTO up_votes(foodtype_id, user_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(1, 2);

COMMIT;
