create schema if not exists public;

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
    "PHONE_NUMBER" varchar(15) not null
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
    "TIME_START" timestamp not null
);

comment on column "TRIP_DRIVER"."IS_FINISHED" is '//finished -- true
// cancelled -- false';

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
    "TIME_START" timestamp not null
);

comment on column "TRIP_PASSENGER"."IS_FINISHED" is '// finishd -- true
// canceled -- false';

alter table "TRIP_PASSENGER" owner to postgres;

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


INSERT INTO public."EMPLOYEE" ("ID", "IS_ADMIN", "FIRST_NAME", "LAST_NAME", "EMAIL", "PASS_WORD", "PHONE_NUMBER") VALUES (1, true, 'Alexey', 'Chernyakov', 'alexey.chernyakov00@gmail.com', '$2a$11$RT99HAdBB9wUpxGBzzt0RuXFgcB66IWFFT4hTuQ5qszNNkIfW.8Du', '+375447164232');
INSERT INTO public."EMPLOYEE" ("ID", "IS_ADMIN", "FIRST_NAME", "LAST_NAME", "EMAIL", "PASS_WORD", "PHONE_NUMBER") VALUES (2, false, 'Elizabeth', 'Kemerava', 'elizabeth.kemerov@gmail.com', '$2a$11$/AiWQ6OmAD.D0i5k9QrpBOp3IBahJfDdtk6OjS07OocRi1Dc39yru', '+375293031773');
INSERT INTO public."EMPLOYEE" ("ID", "IS_ADMIN", "FIRST_NAME", "LAST_NAME", "EMAIL", "PASS_WORD", "PHONE_NUMBER") VALUES (3, false, 'Yana', 'Bernachkaya', 'yana.bernachkaya@gmail.com', '$2a$11$pllp5YxRPWZ/eiK1lkpKy.RaxT4kEPBVtZXvj9bPJE4sUM6.qRT5e', '+375447822582');
INSERT INTO public."EMPLOYEE" ("ID", "IS_ADMIN", "FIRST_NAME", "LAST_NAME", "EMAIL", "PASS_WORD", "PHONE_NUMBER") VALUES (4, false, 'Anastasia', 'Garost', 'garost99@mail.ru', '$2a$11$eWw4BX/flBV9iQ6nh67R.OTbRfLOlYSNgG4ke0g8e1DsuJyCmVwkK', '+375296521023');
INSERT INTO public."EMPLOYEE" ("ID", "IS_ADMIN", "FIRST_NAME", "LAST_NAME", "EMAIL", "PASS_WORD", "PHONE_NUMBER") VALUES (5, false, 'Julia', 'Romanova', 'youliaromanova99@mail.ru', '$2a$11$TVu4CKeL4q3ZzOKhtUAYSeVrysBxan2tb0ghTwPTIGIejTEEoaHzS', '+375333466688');
INSERT INTO public."EMPLOYEE" ("ID", "IS_ADMIN", "FIRST_NAME", "LAST_NAME", "EMAIL", "PASS_WORD", "PHONE_NUMBER") VALUES (6, true, 'Gleb', 'Kazachinskiy', 'raul221299@gmail.com', '$2a$11$y..mUFo1yxV.ZhRgkkjV8OxrFVv/tO0Tnph7Oduj9B0TFD4ROIOYS', '+375293084364');
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
INSERT INTO public."BLACKLIST_DRIVER" ("PASS_ID", "DRIVER_ID", "ID") VALUES (14, 7, 4);
INSERT INTO public."BLACKLIST_DRIVER" ("PASS_ID", "DRIVER_ID", "ID") VALUES (15, 7, 5);
INSERT INTO public."BLACKLIST_DRIVER" ("PASS_ID", "DRIVER_ID", "ID") VALUES (16, 7, 6);
INSERT INTO public."BLACKLIST_PASSENGER" ("PASS_ID", "DRIVER_ID", "ID") VALUES (13, 11, 2);
INSERT INTO public."BLACKLIST_PASSENGER" ("PASS_ID", "DRIVER_ID", "ID") VALUES (13, 12, 3);
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START") VALUES (1, 'Sweden', 'Minsk', 19, true, false, false, '2019-07-28 12:30:45.227921', 3, '2019-07-28 12:00:45.227921');
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START") VALUES (2, 'Kalinkovichi', 'Vasilievichi', 20, true, false, false, '2019-07-28 12:40:45.227921', 3, '2019-07-28 11:50:45.227921');
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START") VALUES (3, 'Homel', 'Minsk', 21, true, false, false, '2019-07-28 14:00:45.227921', 2, '2019-07-28 13:00:45.227921');
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START") VALUES (4, 'Svetlogorsk', 'Mozyr', 22, true, false, false, '2019-07-28 10:30:45.227921', 3, '2019-07-28 10:00:45.227921');
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START") VALUES (5, 'Baranovichi', 'Pinsk', 23, true, false, false, '2019-07-28 16:00:45.227921', 3, '2019-07-28 15:00:45.227921');
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START") VALUES (6, 'Brest', 'Orsha', 24, true, false, false, '2019-07-28 12:30:45.227921', 1, '2019-07-28 11:30:45.227921');
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START") VALUES (7, 'Orsha', 'Minsk', 25, true, false, false, '2019-07-28 12:10:45.227921', 2, '2019-07-28 11:50:45.227921');
INSERT INTO public."TRIP_DRIVER" ("ID", "POINT_START", "POINT_END", "CAR_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "AVAILABLE_SEATS", "TIME_START") VALUES (8, 'Minsk', 'Bitebsk', 20, true, false, false, '2019-07-28 12:20:45.227921', 1, '2019-07-28 11:40:45.227921');
INSERT INTO public."TRIP_PASSENGER" ("ID", "POINT_START", "POINT_END", "PASS_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "TRIP_DRIVER", "BOOKED_SEATS", "TIME_START") VALUES (9, 'Homel', 'Sweden', 18, true, false, false, '2019-07-28 12:20:45.227921', 1, 1, '2019-07-28 12:00:45.227921');
INSERT INTO public."TRIP_PASSENGER" ("ID", "POINT_START", "POINT_END", "PASS_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "TRIP_DRIVER", "BOOKED_SEATS", "TIME_START") VALUES (10, 'Minsk', 'Orsha', 17, true, false, false, '2019-07-28 12:15:45.227921', 6, 1, '2019-07-28 12:05:45.227921');
INSERT INTO public."TRIP_PASSENGER" ("ID", "POINT_START", "POINT_END", "PASS_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "TRIP_DRIVER", "BOOKED_SEATS", "TIME_START") VALUES (11, 'Sweden', 'Homel', 16, true, false, false, '2019-07-28 12:40:45.227921', 3, 1, '2019-07-28 12:25:45.227921');
INSERT INTO public."TRIP_PASSENGER" ("ID", "POINT_START", "POINT_END", "PASS_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "TRIP_DRIVER", "BOOKED_SEATS", "TIME_START") VALUES (12, 'Homel', 'Vitebsk', 15, true, false, false, '2019-07-28 13:30:45.227921', 4, 1, '2019-07-28 13:20:45.227921');
INSERT INTO public."TRIP_PASSENGER" ("ID", "POINT_START", "POINT_END", "PASS_ID", "IS_ACTIVE", "IS_FINISHED", "IS_SAVED", "TIME_END", "TRIP_DRIVER", "BOOKED_SEATS", "TIME_START") VALUES (13, 'Minsk', 'Sweden', 18, true, false, false, '2019-07-28 12:20:45.227921', 4, 1, '2019-07-28 12:10:45.227921');