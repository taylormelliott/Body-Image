DROP TABLE users, results;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
email varchar(255),
passwords text,
gender varchar(255)
);

CREATE TABLE results(
id SERIAL PRIMARY KEY,
user_id int,
desired_body_fat float,
weight_logs int,
body_fat_logs float,
date_logs varchar(255),
results text
);

ALTER TABLE results add foreign key (user_id) references users (id);




INSERT INTO "users" (email,passwords,gender) VALUES ('lacus.Quisque.purus@neceleifend.net','password','female');
INSERT INTO "users" (email,passwords,gender) VALUES ('ipsum.primis@lectusrutrum.org','password','male');
INSERT INTO "users" (email,passwords,gender) VALUES ('vel.venenatis@Loremipsum.org','password','female');
INSERT INTO "results" (user_id,desired_body_fat,weight_logs,body_fat_logs,date_logs) VALUES (2,.07,131,.25,'Aug 10, 2022');
INSERT INTO "results" (user_id,desired_body_fat,weight_logs,body_fat_logs,date_logs) VALUES (3,.15,247,.45,'Mar 27, 2022');
INSERT INTO "results" (user_id,desired_body_fat,weight_logs,body_fat_logs,date_logs) VALUES (2,.25,333,.30,'Jul 24, 2021');
INSERT INTO "results" (user_id,desired_body_fat,weight_logs,body_fat_logs,date_logs) VALUES (3,.15,153,.15,'Apr 20, 2021');
INSERT INTO "results" (user_id,desired_body_fat,weight_logs,body_fat_logs,date_logs) VALUES (1,.07,247,.19,'Nov 3, 2021');
INSERT INTO "results" (user_id,desired_body_fat,weight_logs,body_fat_logs,date_logs) VALUES (3,.25,212,.23,'Feb 11, 2021');
INSERT INTO "results" (user_id,desired_body_fat,weight_logs,body_fat_logs,date_logs) VALUES (3,.25,282,.40,'Mar 5, 2022');



