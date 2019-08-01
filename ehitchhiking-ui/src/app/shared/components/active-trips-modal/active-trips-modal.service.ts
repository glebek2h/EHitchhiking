import {TripStatus} from '../../enums/TripStatus';
import {UserState} from '../../enums/UserState';
import {ActiveTrip} from '../active-trip/active-trip';
import {PassengerInfo} from '../active-trip/passenger-info';
import {DriverInfo} from '../active-trip/driver-info';
import {Car} from '../../models/car';

export class ActiveTripsModalService {
	constructor() {}
	passengers: PassengerInfo[] = [
		{
			name: 'Alisa',
			phone: '+375331111111',
			email: 'alisa@mail.ru',
			markCoordinate: [53.9, 27.5666],
		},
		{
			name: 'Alena',
			phone: '+375331111111',
			email: 'alisa@mail.ru',
			markCoordinate: [53.683973, 27.959534],
		},
		{
			name: 'Andrey',
			phone: '+375331111111',
			email: 'alisa@mail.ru',
			markCoordinate: [52.535686, 30.714509],
		},
		{
			name: 'Alisa2',
			phone: '+375331111111',
			email: 'alisa@mail.ru',
			markCoordinate: [53.247128, 29.019869],
		},
		{
			name: 'Alisa3',
			phone: '+375331111111',
			email: 'alisa@mail.ru',
			markCoordinate: [52.99967, 30.052246],
		},
	];

	driverCar = new Car('1');

	getCar() {
		this.driverCar.changeData('audi', 'silver', 'BM8800');
		return this.driverCar;
	}

	driver: DriverInfo = {
		name: 'Dima',
		phone: '+375292222222',
		email: 'dima@mail.ru',
		car: this.getCar(),
	};

	trips: ActiveTrip[] = [
		{
			id: 0,
			startPoint: 'Minsk',
			endPoint: 'Gomel',
			isFavorite: false,
			status: TripStatus.Active,
			rating: 0,
			role: UserState.Driver,
			date: '25.07.2019',
			time: '10:20',
			reservedSeats: 1,
			showTripInfo: false,
			driver: this.driver,
			passenger: this.passengers,
		},
		{
			id: 1,
			startPoint: 'Minsk',
			endPoint: 'Gomel',
			isFavorite: false,
			status: TripStatus.Active,
			rating: 2,
			role: UserState.Passenger,
			date: '25.07.2019',
			time: '10:20',
			reservedSeats: 1,
			showTripInfo: false,
			driver: this.driver,
			passenger: this.passengers,
		},
		{
			id: 2,
			startPoint: 'Minsk',
			endPoint: 'Grodno',
			isFavorite: false,
			status: TripStatus.Active,
			rating: 0,
			role: UserState.Passenger,
			date: '25.07.2019',
			time: '10:20',
			reservedSeats: 1,
			showTripInfo: false,
			driver: this.driver,
			passenger: this.passengers,
		},
		{
			id: 3,
			startPoint: 'Minsk',
			endPoint: 'Mogilev',
			isFavorite: false,
			status: TripStatus.Active,
			rating: 0,
			role: UserState.Driver,
			date: '25.07.2019',
			time: '10:20',
			reservedSeats: 2,
			showTripInfo: false,
			driver: this.driver,
			passenger: this.passengers,
		},
		{
			id: 4,
			startPoint: 'Mstislavca5',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Active,
			rating: 4,
			role: UserState.Passenger,
			date: '25.07.2019',
			time: '10:20',
			reservedSeats: 1,
			showTripInfo: false,
			driver: this.driver,
			passenger: this.passengers,
		},
		{
			id: 5,
			startPoint: 'Mstislavca5',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Active,
			rating: 0,
			role: UserState.Driver,
			date: '25.07.2019',
			time: '10:20',
			reservedSeats: 1,
			showTripInfo: false,
			driver: this.driver,
			passenger: this.passengers,
		},
		{
			id: 6,
			startPoint: 'Mstislavca6',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Active,
			rating: 5,
			role: UserState.Driver,
			date: '25.07.2019',
			time: '10:20',
			reservedSeats: 2,
			showTripInfo: false,
			driver: this.driver,
			passenger: this.passengers,
		},
		{
			id: 7,
			startPoint: 'Mstislavca6',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Active,
			rating: 0,
			role: UserState.Passenger,
			date: '25.07.2019',
			time: '10:20',
			reservedSeats: 1,
			showTripInfo: false,
			driver: this.driver,
			passenger: this.passengers,
		},
		{
			id: 8,
			startPoint: 'Mstislavca6',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Declined,
			rating: 1,
			role: UserState.Passenger,
			date: '25.07.2019',
			time: '10:20',
			reservedSeats: 1,
			showTripInfo: false,
			driver: this.driver,
			passenger: this.passengers,
		},
		{
			id: 9,
			startPoint: 'Mstislavca6',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Declined,
			rating: 0,
			role: UserState.Driver,
			date: '25.07.2019',
			time: '10:20',
			reservedSeats: 2,
			showTripInfo: false,
			driver: this.driver,
			passenger: this.passengers,
		},
		{
			id: 10,
			startPoint: 'Mstislavca11',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Declined,
			rating: 0,
			role: UserState.Passenger,
			date: '25.07.2019',
			time: '10:20',
			reservedSeats: 1,
			showTripInfo: false,
			driver: this.driver,
			passenger: this.passengers,
		},
		{
			id: 11,
			startPoint: 'Mstislavca12',
			endPoint: 'Turovsky',
			isFavorite: false,
			status: TripStatus.Declined,
			rating: 0,
			role: UserState.Driver,
			date: '25.07.2019',
			time: '10:20',
			reservedSeats: 1,
			showTripInfo: false,
			driver: this.driver,
			passenger: this.passengers,
		},
	];

	getTrips() {
		return this.trips;
	}
	resetTripsList() {
		this.trips = [];
	}
}
