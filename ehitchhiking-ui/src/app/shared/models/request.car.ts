import {Car} from './car';
import {CarInterface} from '@shared/interfaces/car-interface';

export class RequestCar implements CarInterface {
	id: string;
	color: string;
	model: string;
	number: string;
	idOfDriver: string;

	constructor(id: string, color: string, model: string, number: string, driverId: string) {
		this.id = id;
		this.color = color;
		this.model = model;
		this.number = number;
		this.idOfDriver = driverId;
	}

	static fromCar(car: Car, driverId: string): RequestCar {
		return new RequestCar(car.id, car.color, car.model, car.number, driverId);
	}
}
