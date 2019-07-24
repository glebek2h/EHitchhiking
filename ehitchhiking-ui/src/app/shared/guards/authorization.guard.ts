import {AuthorizationService} from '@shared/services/authorization.service';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

export class AuthorizationGuard implements CanActivate {
	constructor() {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		return AuthorizationService.authorizationStatus;
	}
}
