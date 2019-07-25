import {UserService} from './../services/user.service';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

export class AuthorizationGuard implements CanActivate {
	constructor(private userService: UserService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		return this.userService.ifInit();
	}
}
