create sequence trip_driver_trip_pass_id_seq;

alter sequence trip_driver_trip_pass_id_seq owner to elizabeth;

create table employee
(
  id             serial           not null
    constraint user_pk
      primary key,
  isadmin        boolean          not null,
  username       varchar(250)     not null,
  the_first_name varchar(50)      not null,
  the_last_name  varchar(50)      not null,
  email          varchar(200)     not null,
  pass_word      varchar(250)     not null,
  rate_pass      double precision not null,
  phone_number   integer          not null,
  rate_driver    double precision not null
);

comment on table employee is '//this is the table about the user';

alter table employee
  owner to elizabeth;

create unique index user_email_uindex
  on employee (email);

create unique index user_id_uindex
  on employee (id);

create unique index user_username_uindex
  on employee (username);

create unique index "user_phone number_uindex"
  on employee (phone_number);

create table passenger
(
  pass_id serial  not null
    constraint pass_pk
      primary key,
  user_id integer not null
    constraint pass_employee_id_fk
      references employee
);

alter table passenger
  owner to elizabeth;

create table driver
(
  driver_id serial  not null
    constraint driver_pk
      primary key,
  user_id   integer not null
    constraint driver_employee_id_fk
      references employee
);

alter table driver
  owner to elizabeth;

create table cars
(
  car_id     integer      not null
    constraint cars_pk
      primary key,
  car_color  varchar(50)  not null,
  veh_number varchar(50)  not null,
  model      varchar(200) not null,
  driver_id  integer      not null
    constraint cars_driver_driver_id_fk
      references driver
);

comment on table cars is '/// this is the description that every car has';

alter table cars
  owner to elizabeth;

create unique index "cars_veh number_uindex"
  on cars (veh_number);

create table trip_pass
(
  trip_pass_id serial       not null
    constraint trip_pass_pk
      primary key,
  point_start  varchar(500) not null,
  point_end    varchar(500) not null,
  pass_id      integer      not null
    constraint trip_pass_passenger_pass_id_fk
      references passenger,
  time_start   time         not null,
  isactive     boolean      not null,
  isfinished   boolean      not null,
  issaved      boolean      not null
);

comment on column trip_pass.isfinished is '// finishd -- true
// canceled -- false';

alter table trip_pass
  owner to elizabeth;

create table trip_driver
(
  trip_driver_id integer      not null
    constraint trip_driver_pk
      primary key,
  trip_pass_id   integer      not null
    constraint trip_driver_trip_pass_trip_pass_id_fk
      references trip_pass,
  point_start    varchar(500) not null,
  point_end      varchar(500) not null,
  time_start     time         not null,
  car_id         integer      not null
    constraint "trip_driver_cars_car_id _fk"
      references cars,
  isactive       boolean      not null,
  isfinished     boolean      not null,
  issaved        boolean      not null
);

comment on column trip_driver.isfinished is '//finished -- true 
// cancelled -- false';

alter table trip_driver
  owner to elizabeth;

create table blacklist_pass
(
  pass_id   integer not null
    constraint blacklist_pass_passenger_pass_id_fk
      references passenger,
  driver_id integer not null
    constraint blacklist_pass_driver_driver_id_fk
      references driver
);

alter table blacklist_pass
  owner to elizabeth;

create table blacklist_driver
(
  pass_id   integer not null
    constraint blacklist_driver_passenger_pass_id_fk
      references passenger,
  driver_id integer not null
    constraint blacklist_driver_driver_driver_id_fk
      references driver
);

alter table blacklist_driver
  owner to elizabeth;


