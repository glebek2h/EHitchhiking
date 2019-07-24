import {Injectable} from '@angular/core';
import {toBase64String} from '@angular/compiler/src/output/source_map';

@Injectable()
export class AuthorizationService {
	constructor() {}

	getAuthorizationObject(customLogin: string, customPassword: string) {
		return {
			login: customLogin,
			password: toBase64String(customPassword),
		};
	}
}
