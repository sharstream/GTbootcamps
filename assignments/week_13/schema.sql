
DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000(
    id INT NOT NULL AUTO_INCREMENT,
    artist VARCHAR(50) NOT NULL,
    song_name VARCHAR(50) NOT NULL,
    year VARCHAR(4) NOT NULL,
    top_score DECIMAL(10, 4) NULL,
    us_score DECIMAL(10, 4)  NULL,
    uk_score DECIMAL(10, 4)  NULL,
    euro_score DECIMAL(10, 4)  NULL,
    world_score DECIMAL(10, 4)  NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (artist.id)
);

CREATE TABLE artist(
    id INT NOT NULL AUTO_INCREMENT,
    artist VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
);