export class Car {
	id: string;
	model: string;
	color: string;
	number: string;

	constructor(id: string, model: string = '', color: string = '', number: string = '') {
		this.id = id;
		this.model = model;
		this.color = color;
		this.number = number;
	}

	isEmpty(): boolean {
		return !this.model && !this.color && !this.number && !this.id;
	}

	changeData(model: string, color: string, number: string): void {
		this.model = model || this.model;
		this.color = color || this.color;
		this.number = number || this.number;
	}
}
