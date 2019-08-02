export const URL_REGISTRY = {
	BLACKLIST: {
		DELETE_PASSENGER: 'blackList/passenger?empId={{empId}}&idPass={{idDel}}',
		DELETE_DRIVER: 'blackList/driver?empId={{empId}}&idDriver={{idDel}}',
		GET_DRIVER_BLACKLIST: 'blackList/passenger?empId={{empId}}',
		GET_PASSENGER_BLACKLIST: 'blackList/driver?empId={{empId}}',
	},
  ACTIVE_TRIPS: {
	  GET: 'trips/active?id={{id}}',
  },
	EMPLOYEE: {
		GET: 'employee?id={{id}}',
	},
	MAP: {
		GET_DRIVERS_ROUTES: 'trip_passenger/get_all_driver_trips',
		POST_DRIVER_ROUTE: 'trip_driver',
		POST_PASSENGER_ROUTE: 'trip_passenger',
	},
	CAR: {
		ADD_CAR: 'car/add',
		GET_ALL: 'car/all?id={{id}}',
		DELETE_CAR: 'car/delete?id={{id}}',
		UPDATE_CARS: 'car/update',
	},
	PASSENGER: {
		TRIP: {
			SAVE: 'trip_passenger/save',
			REMOVE_FROM_SAVED: 'trip_passenger/removeFromSaved',
		},
	},
	DRIVER: {
		TRIP: {
			SAVE: 'trip_driver/save',
			REMOVE_FROM_SAVED: 'trip_driver/removeFromSaved',
		},
	},
	HISTORY: 'trips/history?id={{id}}',
	CURRENT_USER: 'currentUser',
	LOG_OUT: '/logout',
};
