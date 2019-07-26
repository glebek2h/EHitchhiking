import {map} from 'rxjs/operators';
import {UserService} from './../services/user.service';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '@shared/models/user';

export class AuthorizationGuard implements CanActivate {
	constructor(private userService: UserService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		return this.userService.getStatus().pipe(
			map((status) => {
				if (!(status instanceof User)) {
					this.router.navigateByUrl('/login');
				}
				return !!status;
			})
		);
	}
}
