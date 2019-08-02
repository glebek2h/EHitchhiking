export const URL_REGISTRY = {
	BLACKLIST: {
		DELETE_PASSENGER: 'blackList/passenger?empId={{empId}}&idPass={{idDel}}',
		DELETE_DRIVER: 'blackList/driver?empId={{empId}}&idDriver={{idDel}}',
		GET_DRIVER_BLACKLIST: 'blackList/passenger?empId={{empId}}',
		GET_PASSENGER_BLACKLIST: 'blackList/driver?empId={{empId}}',
	},
	EMPLOYEE: {
		GET: 'employee?id={{id}}',
	},
	MAP: {
		GET_ROUTES: 'tripPassenger/getAllDriverTrips',
	},
	RATE: {
		ADD_RATE_PASSENGER: 'rate/passenger',
		ADD_RATE_DRIVER: 'rate/driver',
		GET_RATE_PASSENGERS: 'rate/get_passengers?id={{tripId}}',
		GET_RATE_DRIVER: 'rate/get_driver?id={{tripId}}',
		ADD_BLACKLIST_PASS: 'blackList/passenger',
		ADD_BLACKLIST_DRIVER: 'blackList/driver',
	},
	CAR: {
		ADD_CAR: 'car/addCar',
		GET_ALL: 'car/getAll?id={{id}}',
		DELETE_CAR: 'car/deleteCar?id={{id}}',
		UPDATE_CARS: 'car/updateCars',
	},
	CURRENT_USER: 'currentUser',
	LOG_OUT: '/logout',
};
