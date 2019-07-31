import { Injectable } from '@angular/core';
import {Route} from "@pages/main-screen/Route";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActiveTripsMapService {
  private subject1 = new Subject<any>();
  private subject2 = new Subject<any>();
  //route: Partial<Route>;

  constructor() { }

  sendMessage(message) {
    this.subject1.next(message);
  }

  getMessage(): Observable<any> {
    return this.subject1.asObservable();
  }

  blockMainScreen(message) {
    this.subject2.next(message);
  }

  getMainScreenInfo(): Observable<any> {
    return this.subject2.asObservable();
  }

}
