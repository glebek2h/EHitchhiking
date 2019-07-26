export const URL_REGISTRY = {
	'employee.getById': 'Employee/getEmployeeUserName?username={{name}}',
  'blacklist.delete': 'blackList/driver?idDriver={{idDr}}&idPass={{idPas}}',
  'blacklist.get': 'blackList/passenger?idPass={{idDr}}',
  'map.getRoutes': 'tripPassenger/getAllDriverTrips',
  'map.postPassengerRoute':
    'tripPassenger/createTrip',
  'map.postDriverRoute':
    'tripDriver/createTrip',
};
