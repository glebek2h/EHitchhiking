import {map} from 'rxjs/operators';
import {UserService} from './../services/user.service';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable, from} from 'rxjs';

export class AuthorizationGuard implements CanActivate {
	constructor(private userService: UserService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		return from(this.userService.getStatus()).pipe(
			map((status) => {
				if (!!status) {
					console.log(status);
					return true;
				}
				this.router.navigateByUrl('/login');
				return false;
			})
		);
	}
}
