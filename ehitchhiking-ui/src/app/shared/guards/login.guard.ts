import {UserService} from '../services/user.service';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';

export class LoginGuard implements CanActivate {
	constructor(private userService: UserService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		this.userService.getStatus().then((status) => {
			if (!!status) {
				this.router.navigateByUrl('/main');
			}
		});
		return true;
	}
}
