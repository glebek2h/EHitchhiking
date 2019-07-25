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

	constructor(private router: Router, private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.registrationForm = this.formBuilder.group({
			login: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z-]{3,50}$')]],
			password: ['', [Validators.required, Validators.pattern('^[a-zA-Z][0-9a-zA-Z.]{5,}$')]],
		});
	}

	onSubmit(event: Event) {
		if (this.login === '' || this.password === '') {
			alert('Error input!');
		} else {
			this.router.navigateByUrl('/main');
		}
	}

	hasError(controlName: string, errorName: string): boolean {
		return this.registrationForm.controls[controlName].hasError(errorName);
	}
}
