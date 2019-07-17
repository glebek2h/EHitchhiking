export class Car {
	model: string;
	color: string;
	carNumber: string;
	experience: number;

	constructor(model: string = '', color: string = '', carNumber: string = '', experience: number = 0) {
		this.model = model;
		this.color = color;
		this.carNumber = carNumber;
		this.experience = experience;
	}

	isEmpty(): boolean {
		return !this.model && !this.color && !this.carNumber && !this.experience;
	}

	changeData(model: string, color: string, carNumber: string, experience: number): void {
		this.model = model || this.model;
		this.color = color || this.color;
		this.carNumber = carNumber || this.carNumber;
		this.experience = experience || this.experience;
	}
}
