import {UserService} from '@shared/services/user.service';
import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
	ifInit = false;
	constructor(private userService: UserService) {}

	ngOnInit() {
		this.userService.getStatus().subscribe(() => (this.ifInit = true));
	}
}
