import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthorizationService} from '@shared/services/authorization.service';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.sass'],
})
export class RegistrationComponent implements OnInit {
	registrationForm: FormGroup;

	constructor(public authorizationService: AuthorizationService, private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.registrationForm = this.formBuilder.group({
			login: ['', [Validators.required]],
			password: ['', [Validators.required]],
		});
	}

	onSubmit() {
		const login = this.registrationForm.controls.login.value;
		const password = this.registrationForm.controls.password.value;
		this.authorizationService.doAuthorization(login, password);
	}

	hasError(controlName: string): boolean {
		return (
			this.registrationForm.controls[controlName] &&
			this.registrationForm.controls[controlName].hasError('required')
		);
	}
}
