import {UserService} from '@shared/services/user.service';
import {Injectable} from '@angular/core';
import {ProfileModalApiService} from './api.services/profile-modal.api.service';
import {User} from '@shared/models/user';
import {Car} from '@shared/models/car';
import {RequestCar} from '@shared/models/request.car';

@Injectable()
export class ProfileModalService {
	constructor(private profileModalApiService: ProfileModalApiService, private userService: UserService) {}

	getCurrentUser(): User | null {
		return this.userService.getCurrentUser();
	}

	getCarsList(userId: string): Promise<Car[]> {
		return this.profileModalApiService.sendCarsListRequest(userId).then(
			(data) => {
				return this.parseCarList(data);
			},
			() => {
				return [];
			}
		);
	}

	addNewCar(newCar: Car, userId: string): Promise<Car | null> {
		return this.profileModalApiService
			.sendNewCarRequest(RequestCar.fromCar(newCar, userId))
			.then((data) => {
				return this.parseCarData(data);
			})
			.catch(() => null);
	}

	deleteCar(carId: string): Promise<boolean> {
		return this.profileModalApiService
			.sendDeleteRequest(carId)
			.then((data) => data)
			.catch(() => false);
	}

	updateCars(cars: Car[], userId: string): Promise<Car[] | null> {
		return this.profileModalApiService
			.sendUpdateRequest(this.addIdField(cars, userId))
			.then((data) => this.parseCarList(data))
			.catch(() => null);
	}

	private addIdField(cars: Car[], userId: string): RequestCar[] {
		return cars.map((car) => RequestCar.fromCar(car, userId));
	}

	private parseCarData(data: any): Car {
		return new Car(data.id, data.model, data.color, data.number);
	}

	private parseCarList(data: any): Car[] {
		return data ? Object.values(data).map(this.parseCarData) : [];
	}
}
