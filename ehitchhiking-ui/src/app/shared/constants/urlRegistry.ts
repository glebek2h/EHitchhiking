export const URL_REGISTRY = {
  BLACKLIST : {
    DELETE_PASSENGER : 'blackList/passenger?empId={{empId}}&idPass={{idDel}}',
    DELETE_DRIVER : 'blackList/driver?empId={{empId}}&idDriver={{idDel}}',
    GET_DRIVER_BLACKLIST : 'blackList/passenger?empId={{empId}}',
    GET_PASSENGER_BLACKLIST: 'blackList/driver?empId={{empId}}',
  },
  EMPLOYEE : {
    GET : 'Employee/getEmployeeUserName?username={{name}}'
  },
  MAP : {
    GET_DRIVERS_ROUTES : 'tripPassenger/getAllDriverTrips',
    POST_DRIVER_ROUTE: 'tripDriver/createTrip',
    POST_PASSENGER_ROUTE: 'tripPassenger/createTrip',
  },
  CURRENT_USER: 'currentUser',
  LOG_OUT: '/logout',
};
