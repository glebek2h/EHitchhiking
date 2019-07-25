import { TripStatus } from "../../enums/TripStatus";
import { UserState } from "../../enums/UserState";
import { ActiveTrip } from "../active-trip/active-trip";
import { PassengerInfo } from "../active-trip/passenger-info";
import { DriverInfo } from "../active-trip/driver-info";
import { Car } from "../../models/car";


export class ActiveTripsModalService {
  constructor() {}
  passengers: PassengerInfo[] = [
    {
    name: 'Alisa',
    phone: '+375331111111',
    email: 'alisa@mail.ru'},
    {
      name: 'Alena',
      phone: '+375331111111',
      email: 'alisa@mail.ru'},
    {
      name: 'Andrey',
      phone: '+375331111111',
      email: 'alisa@mail.ru'},
    {
      name: 'Alisa2',
      phone: '+375331111111',
      email: 'alisa@mail.ru'},
    {
      name: 'Alisa3',
      phone: '+375331111111',
      email: 'alisa@mail.ru'},

  ];

  driverCar = new Car();

  getCar(){
    this.driverCar.changeData('audi', 'silver', 'BM8800', 3);
    return this.driverCar;
  }

  driver: DriverInfo = {
    name: 'Dima',
    phone: '+375292222222',
    email: 'dima@mail.ru',
    car: this.getCar()
  }

  trips: ActiveTrip[] = [
    {id: 0, startPoint: 'Mstislavca1', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Active,rating: 0, role: UserState.Driver, date: '25.07.2019', time: '10:20', reservedSeats: 1,showTripInfo: false, driver: this.driver, passenger: this.passengers},
    {id: 1, startPoint: 'Mstislavca2', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Active, rating: 2, role: UserState.Passenger, date: '25.07.2019', time: '10:20', reservedSeats: 1,showTripInfo: false,  driver: this.driver, passenger: this.passengers},
    {id: 2, startPoint: 'Mstislavca3', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Active, rating: 0, role: UserState.Passenger, date: '25.07.2019', time: '10:20', reservedSeats: 1,showTripInfo: false, driver: this.driver, passenger: this.passengers},
    {id: 3, startPoint: 'Mstislavca4', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Active, rating: 0, role: UserState.Driver, date: '25.07.2019', time: '10:20', reservedSeats: 2,showTripInfo: false, driver: this.driver, passenger: this.passengers},
    {id: 4, startPoint: 'Mstislavca5', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Active, rating: 4,  role: UserState.Passenger, date: '25.07.2019', time: '10:20', reservedSeats: 1,showTripInfo: false, driver: this.driver, passenger: this.passengers},
    {id: 5, startPoint: 'Mstislavca5', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Active, rating: 0, role: UserState.Driver, date: '25.07.2019', time: '10:20', reservedSeats: 1,showTripInfo: false, driver: this.driver, passenger: this.passengers},
    {id: 6, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Active, rating: 5, role: UserState.Driver, date: '25.07.2019', time: '10:20', reservedSeats: 2,showTripInfo: false, driver: this.driver, passenger: this.passengers},
    {id: 7, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Active, rating: 0,  role: UserState.Passenger, date: '25.07.2019', time: '10:20', reservedSeats: 1,showTripInfo: false, driver: this.driver, passenger: this.passengers},
    {id: 8, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined, rating: 1,  role: UserState.Passenger, date: '25.07.2019', time: '10:20', reservedSeats: 1,showTripInfo: false, driver: this.driver, passenger: this.passengers},
    {id: 9, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined, rating: 0, role: UserState.Driver, date: '25.07.2019', time: '10:20', reservedSeats: 2,showTripInfo: false, driver: this.driver, passenger: this.passengers},
    {id: 10, startPoint: 'Mstislavca11', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined, rating: 0,  role: UserState.Passenger, date: '25.07.2019', time: '10:20', reservedSeats: 1,showTripInfo: false, driver: this.driver, passenger: this.passengers},
    {id: 11, startPoint: 'Mstislavca12', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.Declined, rating: 0, role: UserState.Driver, date: '25.07.2019', time: '10:20', reservedSeats: 1,showTripInfo: false, driver: this.driver, passenger: this.passengers},
  ];

  getTrips() {
    return this.trips;
  }
  resetTripsList() {
    this.trips = [];
  }
}
