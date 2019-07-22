import {Car} from './car';
export class User {
	name: string;
	photoPath: string;
	email: string;
	phone: string;
	cars: Car[];

	constructor(
		name: string = '',
		photoPath: string = '',
		email: string = '',
		phone: string = '',
		cars: Array<Car> = []
	) {
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
}
