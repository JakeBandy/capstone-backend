DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
  id INT NOT NULL AUTO_INCREMENT,
  text_todo VARCHAR(50),
  PRIMARY KEY (id)
);

INSERT INTO todos
	(text_todo)
VALUES 
  ("eat breakfast"),
  ("go to the gym"),
  ("Do coding interviews");