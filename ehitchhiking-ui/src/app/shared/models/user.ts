export class User {
	name: string;
	email: string;
	phone: string;
	cars: Car[];

	constructor(name: string = '', email: string = '', phone: string = '', cars: Array<Car> = []) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.cars = cars;
	}

	addCar(car: Car): boolean {
		if (car.isEmpty()) {
			return false;
		}

		this.cars.push(car);
		return true;
	}
}
