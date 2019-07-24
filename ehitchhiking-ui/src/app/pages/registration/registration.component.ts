import {AuthorizationService} from '@shared/services/authorization.service';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.sass'],
	providers: [AuthorizationService],
})
export class RegistrationComponent {
	login: string;
	password: string;
	constructor(private router: Router, private authorizationService: AuthorizationService) {}

	onSubmit() {
		this.authorizationService.doAuthorization(this.login, this.password);
		this.router.navigateByUrl('/main');
	}
}
