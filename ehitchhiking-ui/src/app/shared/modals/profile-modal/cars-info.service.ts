import {Injectable} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Car} from '../../models/car';

@Injectable()
export class CarsInfoService {
	constructor() {}

	toFormGroup(cars: Car[], formBuilder: FormBuilder): FormGroup {
		const group = cars.map((car) => {
			return formBuilder.group({
				model: [car.model, [Validators.required, Validators.pattern('^[0-9a-zA-Z-]{3,50}$')]],
				color: [car.color, [Validators.required, Validators.pattern('^[a-zA-Z-]{3,20}$')]],
				number: [car.number, [Validators.required, Validators.pattern('^[0-9a-zA-Z-]{6,8}$')]],
			});
		});
		// TODO: put object {child-forms: group} into FormGroup
		return new FormGroup(group as any); // group type is [key:string]: FormGroup
	}

	getCarsInfo(carsInfoForm: FormGroup, numOfCars: number, oldCars: Car[]): Car[] {
		const cars: Car[] = [];
		for (let i = 0; i < numOfCars; ++i) {
			// can't use forEach due to the type of carsInfoForm.controls (FormGroup)
			const car = carsInfoForm.controls[i].value;
			cars.push(new Car(oldCars[i].id, car.model, car.color, car.number));
		}
		return cars;
	}
}
