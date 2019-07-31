import {UserService} from '@shared/services/user.service';
import {Injectable} from '@angular/core';
import {ProfileModalApiService} from './api.services/profile-modal.api.service';
import {User} from '@shared/models/user';
import {Car} from '@shared/models/car';

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

	private parseCarData(data: any): Car {
		return new Car(data.id, data.model, data.color, data.number);
	}

	private parseCarList(data: any): Car[] {
		return data ? Object.values(data).map(this.parseCarData) : [];
	}
}
