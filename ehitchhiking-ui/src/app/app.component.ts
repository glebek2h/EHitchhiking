import {UserService} from '@shared/services/user.service';
import {Component, OnInit} from '@angular/core';
import {User} from '@shared/models/user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
	ifInit = false;
	constructor(private userService: UserService) {}

	ngOnInit() {
		this.userService.getStatus().subscribe((status: User) => {
			this.ifInit = true;
		});
	}
}
