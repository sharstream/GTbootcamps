DROP DATABASE IF EXISTS play_musicDB;

CREATE DATABASE play_musicDB;

USE play_musicDB;

CREATE TABLE track (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NULL,
  artist VARCHAR(50) NULL,
  genre VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

INSERT INTO track (title, artist, genre)
VALUES ("River", "Eminem feat. Ed Sheeran", "Rap");

INSERT INTO track (title, artist, genre)
VALUES ("Fix You", "Coldplay", "Rock");

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);