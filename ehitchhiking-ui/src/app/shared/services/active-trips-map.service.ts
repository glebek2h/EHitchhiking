import {Injectable} from '@angular/core';
import {Route} from '@pages/main-screen/Route';
import {Observable, Subject} from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ActiveTripsMapService {
	private drawRouteSubject = new Subject<any>();
	private blockMainSubject = new Subject<any>();

	constructor() {}

	sendMessage(message) {
		this.drawRouteSubject.next(message);
	}

	getMessage(): Observable<any> {
		return this.drawRouteSubject.asObservable();
	}

	blockMainScreen(message) {
		this.blockMainSubject.next(message);
	}

	getMainScreenInfo(): Observable<any> {
		return this.blockMainSubject.asObservable();
	}
}
