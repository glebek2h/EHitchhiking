import {Car} from './car';
export class User {
	id: string;
	name: string;
	rate: number;
	photoPath: string;
	email: string;
	phone: string;
	cars: Car[];


	constructor(
		id: string = '',
		name: string = '',
		rate: number = 0,
		photoPath: string = '',
		email: string = '',
		phone: string = '',
		cars: Array<Car> = []
	) {
		this.id = id;
		this.rate=rate;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.cars = cars;
		this.photoPath = photoPath;
	}

	addCar(car: Car): boolean {
		if (car.isEmpty()) {
			return false;
		}

		this.cars.push(car);
		return true;
	}

	isEmpty(): boolean {
		return !!this.id;
	}
}
