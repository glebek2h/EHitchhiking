export class Car {
	id: string;
	model: string;
	color: string;
	carNumber: string;

	constructor(id: string, model: string = '', color: string = '', carNumber: string = '') {
		this.id = id;
		this.model = model;
		this.color = color;
		this.carNumber = carNumber;
	}

	isEmpty(): boolean {
		return !this.model && !this.color && !this.carNumber && !this.id;
	}

	changeData(model: string, color: string, carNumber: string): void {
		this.model = model || this.model;
		this.color = color || this.color;
		this.carNumber = carNumber || this.carNumber;
	}
}
