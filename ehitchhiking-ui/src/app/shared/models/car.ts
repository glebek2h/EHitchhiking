export class Car {
	model: string;
	color: string;
	carNumber: string;

	constructor(model: string = '', color: string = '', carNumber: string = '') {
		this.model = model;
		this.color = color;
		this.carNumber = carNumber;
	}

	isEmpty(): boolean {
		return !this.model && !this.color && !this.carNumber;
	}

	changeData(model: string, color: string, carNumber: string): void {
		this.model = model || this.model;
		this.color = color || this.color;
		this.carNumber = carNumber || this.carNumber;
	}
}
