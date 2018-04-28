DROP DATABASE IF EXISTS anotherTopSongsDB;
CREATE database anotherTopSongsDB;

USE anotherTopSongsDB;

CREATE TABLE topalbum (
  artist_id INT AUTO_INCREMENT NOT NULL,
  artist_name VARCHAR(100) NULL,
  album_name VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (artist_id)
);

CREATE TABLE topsong (
    song_id INT AUTO_INCREMENT NOT NULL,
    artist VARCHAR(100) NULL,
    song VARCHAR(100) NULL,
    year INT NULL,
    raw_total DECIMAL(10,4) NULL,
    raw_usa DECIMAL(10,4) NULL,
    raw_uk DECIMAL(10,4) NULL,
    raw_eur DECIMAL(10,4) NULL,
    raw_row DECIMAL(10,4) NULL,
    PRIMARY KEY (song_id)
);