insert into users(username, password, user_status)
values ('admin', '$2a$12$ojqeLr8Me6p/m0v29hWBCupHekJLD7T5kr27URQvYOeSqHcUFdm2m', 0),
       ('teo', '$2a$12$ojqeLr8Me6p/m0v29hWBCupHekJLD7T5kr27URQvYOeSqHcUFdm2m', 0),
       ('ana', '$2a$12$ojqeLr8Me6p/m0v29hWBCupHekJLD7T5kr27URQvYOeSqHcUFdm2m', 1),
       ('milivoj', '$2a$12$ojqeLr8Me6p/m0v29hWBCupHekJLD7T5kr27URQvYOeSqHcUFdm2m', 2);

insert into topic(name)
values ('2023 Las Vegas Grand Prix'),
       ('Red Bull car development');

insert into discussion(time, user_id, topic_id, comment)
values ('2005-12-31 23:59:59', 1, 1, 'Ovo je primjer komentara'),
('2005-12-31 23:59:59', 2, 1, 'Ovo je primjer drugog komentara od drugog korisnika za istu temu'),
('2005-12-31 23:59:59', 2, 1, 'sdgsdgsdsdsdg'),
('2005-12-31 23:59:59', 3, 1, 'Ovo je primjer treceg komentara od treceg korisnika za istu temu');