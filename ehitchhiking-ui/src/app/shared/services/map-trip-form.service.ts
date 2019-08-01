import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapTripFormService {

  private subject = new Subject<any>();
  private coordsSubject = new Subject<any>();

  constructor() { }

  sendMessage(message) {
    this.subject.next(message);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  sayYandexMapsINeedCoords(message) {
    this.coordsSubject.next(message);

  }

  yandexMapsGetCoords(): Observable<any> {
    return this.coordsSubject.asObservable();
  }

}
