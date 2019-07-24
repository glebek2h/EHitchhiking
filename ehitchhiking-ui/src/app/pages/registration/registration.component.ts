import {AuthorizationService} from '@shared/services/authorization.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.sass'],
	providers: [AuthorizationService],
})
export class RegistrationComponent implements OnInit {
	login: string;
	password: string;
	constructor(private router: Router) {}
	ngOnInit() {}

	onSubmit(event: Event) {
		if (this.login === '' || this.password === '') {
			alert('Error input!');
		} else {
			this.router.navigateByUrl('/main');
		}
	}
}
