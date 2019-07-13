class Car {
	model: string;
	color: string;
	number: string;
	experience: number;

	constructor(model: string = '', color: string = '', number: string = '', experience: number = 0) {
		this.model = model;
		this.color = color;
		this.number = number;
		this.experience = experience;
	}

	isEmpty(): boolean {
		return !this.model && !this.color && !this.number && !this.experience;
	}

	changeData(model: string, color: string, number: string, experience: number): void {
		this.model = model || this.model;
		this.color = color || this.color;
		this.number = number || this.number;
		this.experience = experience || this.experience;
	}
}
