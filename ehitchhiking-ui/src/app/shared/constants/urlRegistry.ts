export const URL_REGISTRY = {
	'employee.getById': 'Employee/getEmployeeUserName?username={{name}}',
	'map.getRoutes': 'tripPassenger/getAllDriverTrips',
	'blacklist.deleteDriver': 'blackList/driver?empId={{empId}}&idDriver={{idDel}}',
	'blacklist.deletePass': 'blackList/passenger?empId={{empId}}&idPass={{idDel}}',
	'blacklist.getDriverBlacklist': 'blackList/passenger?empId={{empId}}',
	'blacklist.getPassengerBlacklist': 'blackList/driver?empId={{empId}}',
	currentUser: 'currentUser',
	logOut: '/logout',
};
