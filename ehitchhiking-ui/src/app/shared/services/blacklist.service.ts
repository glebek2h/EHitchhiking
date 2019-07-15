import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {

  private messageSource = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: boolean) {
    this.messageSource.next(message);
  }
}