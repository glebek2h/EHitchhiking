import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {RequestCar} from '@shared/models/request.car';
import {CarInterface} from '@shared/interfaces/car-interface';
import {Car} from '@shared/models/car';

@Injectable({
	providedIn: 'root',
})
export class ProfileModalApiService {
	constructor(private apiService: ApiService) {}

	getCarsList(userId: string): Promise<Car[]> {
		return this.sendCarsListRequest(userId).then(
			(data) => {
				return this.parseCarList(data);
			},
			() => {
				return [];
			}
		);
	}

	addNewCar(newCar: Car, userId: string): Promise<Car | null> {
		return this.sendNewCarRequest(RequestCar.fromCar(newCar, userId))
			.then((data) => {
				return this.parseCarData(data);
			})
			.catch(() => null);
	}

	deleteCar(carId: string): Promise<boolean> {
		return this.sendDeleteRequest(carId)
			.then((data) => data)
			.catch(() => false);
	}

	updateCars(cars: Car[], userId: string): Promise<Car[] | null> {
		return this.sendUpdateRequest(this.addIdField(cars, userId))
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

	private sendCarsListRequest(userId: string): Promise<CarInterface[]> {
		return this.apiService.doGet(URL_REGISTRY.CAR.GET_ALL, false, {id: userId});
	}

	private sendNewCarRequest(car: RequestCar): Promise<CarInterface> {
		return this.apiService.doPost(URL_REGISTRY.CAR.ADD_CAR, car);
	}

	private sendDeleteRequest(carId: string): Promise<boolean> {
		return this.apiService.doDelete(URL_REGISTRY.CAR.DELETE_CAR, {id: carId});
	}

	private sendUpdateRequest(cars: RequestCar[]): Promise<CarInterface[]> {
		return this.apiService.doPut(URL_REGISTRY.CAR.UPDATE_CARS, cars);
	}
}
