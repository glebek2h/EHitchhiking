import {Car} from './car';
export class UserInfoTrip {
	id: string;
	name: string;
	phone: string;
	email: string;
	car?: Car;

	constructor(id: string = '', name: string = '', phone: string = '', email: string = '', car?: Car) {
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.car = car;
	}
}
