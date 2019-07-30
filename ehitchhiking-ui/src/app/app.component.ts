import {Component, OnInit} from '@angular/core';
import {UserService} from '@shared/services/user.service';
import {User} from '@shared/models/user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
	isAppInitialized = false;
	constructor(private userService: UserService) {}

	ngOnInit() {
		this.userService.getStatus().then((status: User) => {
			this.isAppInitialized = true;
		});
	}
}
