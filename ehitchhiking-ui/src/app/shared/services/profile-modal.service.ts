import {UserService} from '@shared/services/user.service';
import {Injectable} from '@angular/core';
import {ProfileModalApiService} from './api.services/profile-modal.api.service';
import {User} from '@shared/models/user';

@Injectable()
export class ProfileModalService {
	constructor(private profileModalApiService: ProfileModalApiService, private userService: UserService) {}

	getCurrentUser(): User | null {
		return this.userService.getCurrentUser();
	}
}
