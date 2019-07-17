import {Injectable} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Car} from '../../models/car';

@Injectable()
export class CarsInfoService {
	constructor() {}

	public toFormGroup(cars: Car[], formBuilder: FormBuilder): FormGroup {
		const group: any = {};
		cars.forEach(function(car, index) {
			group[index] = formBuilder.group({
				model: [car.model, [Validators.required, Validators.pattern('^[0-9a-zA-Z-]{3,50}$')]],
				color: [car.color, [Validators.required, Validators.pattern('^[a-zA-Z-]{3,20}$')]],
				carNumber: [car.carNumber, [Validators.required, Validators.pattern('^[0-9a-zA-Z-]{6,8}$')]],
				experience: [
					car.experience,
					[Validators.required, Validators.pattern('^[0-9]{1,2}$'), Validators.max(80)],
				],
			});
		});
		return new FormGroup(group);
	}

	public getCarsInfo(carsInfoForm: FormGroup, numOfCars: number): Car[] {
		let car: any;
		const cars: Car[] = [];
		for (let i = 0; i < numOfCars; ++i) {
			car = carsInfoForm.controls[i].value;
			cars.push(new Car(car.model, car.color, car.carNumber, car.experience));
		}
		return cars;
	}
}
