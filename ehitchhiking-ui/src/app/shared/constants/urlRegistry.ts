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
	CAR: {
		ADD_CAR: 'car/addCar',
		GET_ALL: 'car/getAll?id={{id}}',
		DELETE_CAR: 'car/deleteCar?id={{id}}',
		UPDATE_CARS: 'car/updateCars',
	},
	PASSENGER: {
		TRIP: {
			SAVE: 'tripPassenger/save',
			REMOVE_FROM_SAVED: 'tripPassenger/removeFromSaved',
		},
	},
	DRIVER: {
		TRIP: {
			SAVE: 'tripDriver/save',
			REMOVE_FROM_SAVED: 'tripDriver/removeFromSaved',
		},
	},
	HISTORY: 'trips/history?id={{id}}',
	CURRENT_USER: 'currentUser',
	LOG_OUT: '/logout',
};
