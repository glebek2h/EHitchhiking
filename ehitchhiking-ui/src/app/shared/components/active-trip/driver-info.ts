import {Car} from '../../models/car';

export interface DriverInfo {
	name: string;
	phone: string;
	email: string;
	car: Car;
}
