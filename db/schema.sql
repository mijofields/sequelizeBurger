DROP DATABASE IF EXISTS seqburgers_db;
CREATE database seqburgers_db;

USE seqburgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;

