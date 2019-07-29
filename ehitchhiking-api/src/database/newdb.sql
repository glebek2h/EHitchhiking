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
    "USER_NAME" varchar(250) not null,
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

create unique index if not exists user_username_uindex
    on "EMPLOYEE" ("USER_NAME");

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
    "RATING_PEOPLE" integer not null,
    "RATE_PASSENGER" double precision not null
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
    "RATE_DRIVER" double precision not null,
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
    "ID_DRIVER" integer not null
        constraint car_driver_driver_id_fk
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

