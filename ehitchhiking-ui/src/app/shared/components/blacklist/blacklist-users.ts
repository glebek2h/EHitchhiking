import {User} from '@shared/models/user';
import {Car} from '@shared/models/car';

export const CUR_USER: User = new User('8', 'Anastasia Harostjhbvhgv', '', 'hello@gmail.com', '+375291234567', [
  new Car('ferrari', 'pink', 'A3434B', 1)]);

export const BLACKLIST_PASSENGERS: User[] = [
  new User('5', 'Anastasia Harostjhbvhgv', '', 'hello@gmail.com', '+375291234567', [
    new Car('ferrari', 'pink', 'A3434B', 1)]),
  new User('2', 'Gleb Kazachinsky', '', 'hello@gmail.com', '+375291234567', [
    new Car('ferrari', 'pink', 'A3434B', 1)]),
  new User('3', 'Julia Romanova', '', 'hello@gmail.com', '+375291234567', [
    new Car('ferrari', 'pink', 'A3434B', 1)]),
  new User('4', 'Yana ', '', 'hello@gmail.com', '+375291234567', [
    new Car('ferrari', 'pink', 'A3434B', 1)]),
  new User('1', 'Aleksey', '', 'hello@gmail.com', '+375291234567', [
    new Car('ferrari', 'pink', 'A3434B', 1)]),
  new User('6', 'Eliza', '', 'hello@gmail.com', '+375291234567', [
    new Car('ferrari', 'pink', 'A3434B', 1)])
]

export const BLACKLIST_DRIVERS: User[] = [
  new User('6', 'Pavel Sygako', '', 'hello@gmail.com', '+375291234567', [
    new Car('ferrari', 'pink', 'A3434B', 1)]),
  new User('2', 'Aleksey Spypenev', '', 'hello@gmail.com', '+375291234567', [
    new Car('ferrari', 'pink', 'A3434B', 1)]),
  new User('3', 'Alina Syponenko', '', 'hello@gmail.com', '+375291234567', [
    new Car('ferrari', 'pink', 'A3434B', 1)]),]
