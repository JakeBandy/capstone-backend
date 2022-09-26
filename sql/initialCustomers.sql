DROP TABLE IF EXISTS customers, trades;

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE trades (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(50),
  retail_price VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES customers (id)
    ON DELETE CASCADE
);

INSERT INTO customers
	(first_name, last_name, email)
VALUES 
  ("Bob","Mark", "bobby1@hotmail.com"),
  ("Joe","Dirt", "joedirt3@hotmail.com"),
  ("Jake","Bandy", "jakebandy13@hotmail.com");

INSERT INTO trades
	(title, retail_price, user_id)
VALUES 
  ("Mario","5.99", 3),
  ("COD","59.99", 4),
  ("Cuphead","19.99", 6);