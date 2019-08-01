import {Car} from './car';

export class RequestCar {
	id: string;
	color: string;
	model: string;
	number: string;
	driverId: string;

	constructor(id: string, color: string, model: string, number: string, driverId: string) {
		this.id = id;
		this.color = color;
		this.model = model;
		this.number = number;
		this.driverId = driverId;
	}

	static fromCar(car: Car, driverId: string): RequestCar {
		return new RequestCar(car.id, car.color, car.model, car.number, driverId);
	}
}
