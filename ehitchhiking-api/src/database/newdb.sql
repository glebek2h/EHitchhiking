drop schema public cascade;

create schema public;

alter schema public owner to postgres;

create sequence hibernate_sequence;

alter sequence hibernate_sequence owner to postgres;

create table if not exists "EMPLOYEE"
(
    "ID" serial not null
        constraint user_pk
            primary key,
    "IS_ADMIN" boolean not null,
    "FIRST_NAME" varchar(50) not null,
    "LAST_NAME" varchar(50) not null,
    "EMAIL" varchar(200) not null,
    "PASS_WORD" varchar(250) not null,
    "PHONE_NUMBER" varchar(15) not null,
    "POINTS" double precision not null
);

comment on table "EMPLOYEE" is '//this is the table about the user';

alter table "EMPLOYEE" owner to postgres;

create unique index if not exists user_email_uindex
    on "EMPLOYEE" ("EMAIL");

create unique index if not exists user_id_uindex
    on "EMPLOYEE" ("ID");

create unique index if not exists "user_phone number_uindex"
    on "EMPLOYEE" ("PHONE_NUMBER");

create table if not exists "PASSENGER"
(
    "ID" serial not null
        constraint pass_pk
            primary key,
    "EMPLOYEE_ID" integer not null
        constraint pass_employee_id_fk
            references "EMPLOYEE",
    "RATE_PASSENGER" integer not null,
    "RATING_PEOPLE" integer not null
);

alter table "PASSENGER" owner to postgres;

create table if not exists "DRIVER"
(
    "ID" serial not null
        constraint driver_pk
            primary key,
    "EMPLOYEE_ID" integer not null
        constraint driver_employee_id_fk
            references "EMPLOYEE",
    "RATE_DRIVER" integer not null,
    "RATING_PEOPLE" integer not null
);

alter table "DRIVER" owner to postgres;

create table if not exists "CAR"
(
    "ID" integer not null
        constraint cars_pk
            primary key,
    "CAR_COLOR" varchar(50) not null,
    "VEH_NUMBER" varchar(50) not null,
    "MODEL" varchar(200) not null,
    "DRIVER_ID" integer not null
        constraint cars_driver_driver_id_fk
            references "DRIVER",
    "IS_DELETED" boolean not null
);

comment on table "CAR" is '/// this is the description that every car has';

alter table "CAR" owner to postgres;

create unique index if not exists "cars_veh number_uindex"
    on "CAR" ("VEH_NUMBER");

create table if not exists "BLACKLIST_PASSENGER"
(
    "PASS_ID" integer not null
        constraint blacklist_pass_passenger_pass_id_fk
            references "PASSENGER",
    "DRIVER_ID" integer not null
        constraint blacklist_pass_driver_driver_id_fk
            references "DRIVER",
    "ID" serial not null
        constraint blacklist_pass_pk
            primary key
);

alter table "BLACKLIST_PASSENGER" owner to postgres;

create table if not exists "BLACKLIST_DRIVER"
(
    "PASS_ID" integer not null
        constraint blacklist_driver_passenger_pass_id_fk
            references "PASSENGER",
    "DRIVER_ID" integer not null
        constraint blacklist_driver_driver_driver_id_fk
            references "DRIVER",
    "ID" serial not null
        constraint blacklist_driver_pk
            primary key
);

alter table "BLACKLIST_DRIVER" owner to postgres;

create table if not exists "CHAT"
(
    "ID" serial not null
        constraint chat_pk
            primary key,
    "HISTORY" json
);

alter table "CHAT" owner to postgres;

create table if not exists "TRIP_DRIVER"
(
    "ID" integer not null
        constraint trip_driver_pk
            primary key,
    "POINT_START" varchar(500) not null,
    "POINT_END" varchar(500) not null,
    "CAR_ID" integer not null
        constraint "trip_driver_cars_car_id _fk"
            references "CAR",
    "IS_ACTIVE" boolean not null,
    "IS_FINISHED" boolean not null,
    "IS_SAVED" boolean not null,
    "TIME_END" timestamp,
    "AVAILABLE_SEATS" integer not null,
    "TIME_START" timestamp not null,
    "DISTANCE" double precision not null,
    "IS_HISTORY" boolean not null,
    "COORD_START" bytea,
    "COORD_END" bytea,
    "CHAT" integer
        constraint trip_driver_chat_id_fk
            references "CHAT"
);

comment on column "TRIP_DRIVER"."IS_FINISHED" is '//finished -- true
// cancelled -- false';

comment on column "TRIP_DRIVER"."IS_HISTORY" is '//true -- not deleted from history
//false -- deleted from history';

alter table "TRIP_DRIVER" owner to postgres;

create table if not exists "TRIP_PASSENGER"
(
    "ID" serial not null
        constraint trip_pass_pk
            primary key,
    "POINT_START" varchar(500) not null,
    "POINT_END" varchar(500) not null,
    "PASS_ID" integer not null
        constraint trip_pass_passenger_pass_id_fk
            references "PASSENGER",
    "IS_ACTIVE" boolean not null,
    "IS_FINISHED" boolean not null,
    "IS_SAVED" boolean not null,
    "TIME_END" timestamp not null,
    "TRIP_DRIVER" integer not null
        constraint trip_pass_trip_driver_trip_driver_id_fk
            references "TRIP_DRIVER",
    "BOOKED_SEATS" integer not null,
    "TIME_START" timestamp not null,
    "DISTANCE" double precision not null,
    "IS_HISTORY" boolean not null,
    "COORD_START" bytea,
    "COORD_END" bytea
);

comment on column "TRIP_PASSENGER"."IS_FINISHED" is '// finishd -- true
// canceled -- false';

comment on column "TRIP_PASSENGER"."IS_HISTORY" is '//true -- not deleted
//false -- deleted from history';

alter table "TRIP_PASSENGER" owner to postgres;

create unique index if not exists chat_id_uindex
    on "CHAT" ("ID");



INSERT INTO public."EMPLOYEE" ("ID", "IS_ADMIN", "FIRST_NAME", "LAST_NAME", "EMAIL", "PASS_WORD", "PHONE_NUMBER", "POINTS") VALUES (4, false, 'Anastasia', 'Garost', 'garost99@mail.ru', '$2a$10$7VbWdiGztc55EIL1wimLruGpBqtHYGdkmSmY1sED5fgpdtNpIebmu', '+375296521023', 70);
INSERT INTO public."EMPLOYEE" ("ID", "IS_ADMIN", "FIRST_NAME", "LAST_NAME", "EMAIL", "PASS_WORD", "PHONE_NUMBER", "POINTS") VALUES (1, true, 'Alexey', 'Chernyakov', 'alexey.chernyakov00@gmail.com', '$2a$10$bjmKjhbQjOyU9OyZfF8jneETV6Y/8E7YvHTHieb1Ho8/BvztLRheK', '+375447164232', 100);
INSERT INTO public."EMPLOYEE" ("ID", "IS_ADMIN", "FIRST_NAME", "LAST_NAME", "EMAIL", "PASS_WORD", "PHONE_NUMBER", "POINTS") VALUES (3, false, 'Yana', 'Bernachkaya', 'yana.bernachkaya@gmail.com', '$2a$10$crgdfruL.7x7AiUEs3YB/erstHG4ktgak7vPceYDaWcwgadvdQABy', '+375447822582', 60);
INSERT INTO public."EMPLOYEE" ("ID", "IS_ADMIN", "FIRST_NAME", "LAST_NAME", "EMAIL", "PASS_WORD", "PHONE_NUMBER", "POINTS") VALUES (5, false, 'Julia', 'Romanova', 'youliaromanova99@mail.ru', '$2a$10$ie4CY/se0yRBx/Ya9qkiH.2NVfXVzJqXJJcgQ6TZN/rs6aspDwmhi', '+375333466688', 80);
INSERT INTO public."EMPLOYEE" ("ID", "IS_ADMIN", "FIRST_NAME", "LAST_NAME", "EMAIL", "PASS_WORD", "PHONE_NUMBER", "POINTS") VALUES (6, true, 'Gleb', 'Kazachinskiy', 'raul221299@gmail.com', '$2a$10$XUrSwUkIMRzBb8.rXfA5Ve4uZ.2BvVyQNszbamJXvZBVvL2WUGwbW', '+375293084364', 90);
INSERT INTO public."EMPLOYEE" ("ID", "IS_ADMIN", "FIRST_NAME", "LAST_NAME", "EMAIL", "PASS_WORD", "PHONE_NUMBER", "POINTS") VALUES (2, false, 'Elizabeth', 'Kemerava', 'elizabeth.kemerov@gmail.com', '$2a$10$JmxaxdHQ.iZW36PCqdRu5.awDxiYDlLy74eF9ULapjZ0n/GVWFxP.', '+375293031773', 50);
INSERT INTO public."DRIVER" ("ID", "EMPLOYEE_ID", "RATE_DRIVER", "RATING_PEOPLE") VALUES (7, 1, 0, 0);
INSERT INTO public."DRIVER" ("ID", "EMPLOYEE_ID", "RATE_DRIVER", "RATING_PEOPLE") VALUES (8, 2, 0, 0);
INSERT INTO public."DRIVER" ("ID", "EMPLOYEE_ID", "RATE_DRIVER", "RATING_PEOPLE") VALUES (9, 3, 0, 0);
INSERT INTO public."DRIVER" ("ID", "EMPLOYEE_ID", "RATE_DRIVER", "RATING_PEOPLE") VALUES (10, 4, 0, 0);
INSERT INTO public."DRIVER" ("ID", "EMPLOYEE_ID", "RATE_DRIVER", "RATING_PEOPLE") VALUES (11, 5, 0, 0);
INSERT INTO public."DRIVER" ("ID", "EMPLOYEE_ID", "RATE_DRIVER", "RATING_PEOPLE") VALUES (12, 6, 0, 0);
INSERT INTO public."PASSENGER" ("ID", "EMPLOYEE_ID", "RATE_PASSENGER", "RATING_PEOPLE") VALUES (13, 1, 0, 0);
INSERT INTO public."PASSENGER" ("ID", "EMPLOYEE_ID", "RATE_PASSENGER", "RATING_PEOPLE") VALUES (14, 2, 0, 0);
INSERT INTO public."PASSENGER" ("ID", "EMPLOYEE_ID", "RATE_PASSENGER", "RATING_PEOPLE") VALUES (15, 3, 0, 0);
INSERT INTO public."PASSENGER" ("ID", "EMPLOYEE_ID", "RATE_PASSENGER", "RATING_PEOPLE") VALUES (16, 4, 0, 0);
INSERT INTO public."PASSENGER" ("ID", "EMPLOYEE_ID", "RATE_PASSENGER", "RATING_PEOPLE") VALUES (17, 5, 0, 0);
INSERT INTO public."PASSENGER" ("ID", "EMPLOYEE_ID", "RATE_PASSENGER", "RATING_PEOPLE") VALUES (18, 6, 0, 0);
INSERT INTO public."CAR" ("ID", "CAR_COLOR", "VEH_NUMBER", "MODEL", "DRIVER_ID", "IS_DELETED") VALUES (19, 'red', '4851 EE-3', 'Lada', 7, false);
INSERT INTO public."CAR" ("ID", "CAR_COLOR", "VEH_NUMBER", "MODEL", "DRIVER_ID", "IS_DELETED") VALUES (20, 'blue', '7392 AB-7', 'Ferrari', 7, false);
INSERT INTO public."CAR" ("ID", "CAR_COLOR", "VEH_NUMBER", "MODEL", "DRIVER_ID", "IS_DELETED") VALUES (21, 'green', '6923 EQ-6', 'Citroen', 8, false);
INSERT INTO public."CAR" ("ID", "CAR_COLOR", "VEH_NUMBER", "MODEL", "DRIVER_ID", "IS_DELETED") VALUES (22, 'white', '0364 RT-4', 'Pegeout', 8, false);
INSERT INTO public."CAR" ("ID", "CAR_COLOR", "VEH_NUMBER", "MODEL", "DRIVER_ID", "IS_DELETED") VALUES (23, 'black', '1488 EE-3', 'Opel', 9, false);
INSERT INTO public."CAR" ("ID", "CAR_COLOR", "VEH_NUMBER", "MODEL", "DRIVER_ID", "IS_DELETED") VALUES (24, 'pink', '7493 UI-1', 'BMW', 12, false);
INSERT INTO public."CAR" ("ID", "CAR_COLOR", "VEH_NUMBER", "MODEL", "DRIVER_ID", "IS_DELETED") VALUES (25, 'red', '0228 CE-2', 'Mercedes', 10, false);
INSERT INTO public."CAR" ("ID", "CAR_COLOR", "VEH_NUMBER", "MODEL", "DRIVER_ID", "IS_DELETED") VALUES (26, 'blue', '0322 TE-6', 'Volga', 7, false);
INSERT INTO public."CAR" ("ID", "CAR_COLOR", "VEH_NUMBER", "MODEL", "DRIVER_ID", "IS_DELETED") VALUES (27, 'green', '5392 UE-5', 'Volvo', 12, false);
INSERT INTO public."CAR" ("ID", "CAR_COLOR", "VEH_NUMBER", "MODEL", "DRIVER_ID", "IS_DELETED") VALUES (28, 'red', '1038 BE-7', 'BMW', 7, false);
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START", "DISTANCE", "IS_HISTORY", "COORD_START", "COORD_END", "CHAT") VALUES (1, 'Sweden', 'Minsk', 19, true, false, false, '2019-07-28 12:30:45.227921', 3, '2019-07-28 12:00:45.227921', 1500, true, E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404DD66574CEDEF6402D0AADF3C3B19B', E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404AF37FAE3608D1403B8FD74F06CE50', null);
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START", "DISTANCE", "IS_HISTORY", "COORD_START", "COORD_END", "CHAT") VALUES (2, 'Kalinkovichi', 'Vasilievichi', 20, true, false, false, '2019-07-28 12:40:45.227921', 3, '2019-07-28 11:50:45.227921', 50, true, E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404A1076A21DCC9A403D54D986EF72EA', E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404A524ADF216327403DDC6723FB87CB', null);
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START", "DISTANCE", "IS_HISTORY", "COORD_START", "COORD_END", "CHAT") VALUES (3, 'Homel', 'Minsk', 21, true, false, false, '2019-07-28 14:00:45.227921', 2, '2019-07-28 13:00:45.227921', 300, true, E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404A3642253E7DEA403F035F18944B7C', E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404AF37FAE3608D1403B8FD74F06CE50', null);
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START", "DISTANCE", "IS_HISTORY", "COORD_START", "COORD_END", "CHAT") VALUES (4, 'Svetlogorsk', 'Mozyr', 22, true, false, false, '2019-07-28 10:30:45.227921', 3, '2019-07-28 10:00:45.227921', 150, true, E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404A51074066219D403DBF98FD926776', E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404A0616001C8572403D44479FD1C1FF', null);
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START", "DISTANCE", "IS_HISTORY", "COORD_START", "COORD_END", "CHAT") VALUES (5, 'Baranovichi', 'Pinsk', 23, true, false, false, '2019-07-28 16:00:45.227921', 3, '2019-07-28 15:00:45.227921', 120, true, E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404A90EEF5EC80C7403A04B6E27FBC79', E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404A0E435B9F6307403A1A448EA549D1', null);
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START", "DISTANCE", "IS_HISTORY", "COORD_START", "COORD_END", "CHAT") VALUES (6, 'Brest', 'Orsha', 24, true, false, false, '2019-07-28 12:30:45.227921', 1, '2019-07-28 11:30:45.227921', 600, true, E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404A0C0008637BD04037AF684A6C34DD', E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404B4185F72565EB403E6CEA330F2105', null);
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START", "DISTANCE", "IS_HISTORY", "COORD_START", "COORD_END", "CHAT") VALUES (7, 'Orsha', 'Minsk', 25, true, false, false, '2019-07-28 12:10:45.227921', 2, '2019-07-28 11:50:45.227921', 270, true, E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404B4185F72565EB403E6CEA330F2105', E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404AF37FAE3608D1403B8FD74F06CE50', null);
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START", "DISTANCE", "IS_HISTORY", "COORD_START", "COORD_END", "CHAT") VALUES (8, 'Minsk', 'Bitebsk', 20, true, false, false, '2019-07-28 12:20:45.227921', 1, '2019-07-28 11:40:45.227921', 280, true, E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404AF37FAE3608D1403B8FD74F06CE50', E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404B98B4DE997DEB403E3500D0E057C4', null);
INSERT INTO public."TRIP_PASSENGER" ("ID", "POINT_START", "POINT_END", "PASS_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "TRIP_DRIVER", "BOOKED_SEATS", "TIME_START", "DISTANCE", "IS_HISTORY", "COORD_START", "COORD_END") VALUES (9, 'Homel', 'Sweden', 18, true, false, false, '2019-07-28 12:20:45.227921', 1, 1, '2019-07-28 12:00:45.227921', 1300, true, E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404A3642253E7DEA403F035F18944B7C', E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404DD66574CEDEF6402D0AADF3C3B19B');
INSERT INTO public."TRIP_PASSENGER" ("ID", "POINT_START", "POINT_END", "PASS_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "TRIP_DRIVER", "BOOKED_SEATS", "TIME_START", "DISTANCE", "IS_HISTORY", "COORD_START", "COORD_END") VALUES (10, 'Minsk', 'Orsha', 17, true, false, false, '2019-07-28 12:15:45.227921', 6, 1, '2019-07-28 12:05:45.227921', 250, true, E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404AF37FAE3608D1403B8FD74F06CE50', E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404B4185F72565EB403E6CEA330F2105');
INSERT INTO public."TRIP_PASSENGER" ("ID", "POINT_START", "POINT_END", "PASS_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "TRIP_DRIVER", "BOOKED_SEATS", "TIME_START", "DISTANCE", "IS_HISTORY", "COORD_START", "COORD_END") VALUES (11, 'Sweden', 'Homel', 16, true, false, false, '2019-07-28 12:40:45.227921', 3, 1, '2019-07-28 12:25:45.227921', 1250, true, E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404DD66574CEDEF6402D0AADF3C3B19B', E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404A3642253E7DEA403F035F18944B7C');
INSERT INTO public."TRIP_PASSENGER" ("ID", "POINT_START", "POINT_END", "PASS_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "TRIP_DRIVER", "BOOKED_SEATS", "TIME_START", "DISTANCE", "IS_HISTORY", "COORD_START", "COORD_END") VALUES (12, 'Homel', 'Vitebsk', 15, true, false, false, '2019-07-28 13:30:45.227921', 4, 1, '2019-07-28 13:20:45.227921', 500, true, E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404A3642253E7DEA403F035F18944B7C', E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404B98B4DE997DEB403E3500D0E057C4');
INSERT INTO public."TRIP_PASSENGER" ("ID", "POINT_START", "POINT_END", "PASS_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "TRIP_DRIVER", "BOOKED_SEATS", "TIME_START", "DISTANCE", "IS_HISTORY", "COORD_START", "COORD_END") VALUES (13, 'Minsk', 'Sweden', 18, true, false, false, '2019-07-28 12:20:45.227921', 4, 1, '2019-07-28 12:10:45.227921', 1400, true, E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404AF37FAE3608D1403B8FD74F06CE50', E'\\xACED0005737200226F72672E737072696E676672616D65776F726B2E646174612E67656F2E506F696E7431B9E90EF11A400602000244000178440001797870404DD66574CEDEF6402D0AADF3C3B19B');
INSERT INTO public."BLACKLIST_DRIVER" ("PASS_ID", "DRIVER_ID", "ID") VALUES (14, 7, 4);
INSERT INTO public."BLACKLIST_DRIVER" ("PASS_ID", "DRIVER_ID", "ID") VALUES (15, 7, 5);
INSERT INTO public."BLACKLIST_DRIVER" ("PASS_ID", "DRIVER_ID", "ID") VALUES (16, 7, 6);
INSERT INTO public."BLACKLIST_PASSENGER" ("PASS_ID", "DRIVER_ID", "ID") VALUES (13, 11, 2);
INSERT INTO public."BLACKLIST_PASSENGER" ("PASS_ID", "DRIVER_ID", "ID") VALUES (13, 12, 3);
