import {AuthorizationService} from '@shared/services/authorization.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.sass'],
})
export class RegistrationComponent implements OnInit {
	registrationForm: FormGroup;
	login: string;
	password: string;

	constructor(
		private router: Router,
		public authorizationService: AuthorizationService,
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		this.registrationForm = this.formBuilder.group({
			login: ['', [Validators.required]],
			password: ['', [Validators.required]],
		});
	}

	onSubmit() {
		this.authorizationService.doAuthorization(this.login, this.password);
		this.router.navigateByUrl('/main');
	}

	hasError(controlName: string): boolean {
		return (
			this.registrationForm.controls[controlName] &&
			this.registrationForm.controls[controlName].hasError('required')
		);
	}
}
