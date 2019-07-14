import {Component, OnInit} from '@angular/core';
import {User} from './shared/models/user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
	user: User;

	ngOnInit() {
		this.user = new User('yana', 'hello@gmail.com');
	}
}
