import { Injectable } from '@angular/core';
import { Trip } from "./trips";

@Injectable({
  providedIn: 'root'
})
export class TripsModalService {

  constructor() { }
  StatusEnum = Object.freeze({"active":0, "completed":1, "declined":2});
  trips: Trip[] = [
    {id: 0, startPoint: 'Mstislavca1', endPoint: 'Turovsky', isFavorite: false, status: this.StatusEnum.active },
    {id: 1,startPoint: 'Mstislavca2', endPoint: 'Turovsky', isFavorite: false, status: this.StatusEnum.active},
    {id: 2, startPoint: 'Mstislavca3', endPoint: 'Turovsky', isFavorite: false, status: this.StatusEnum.completed},
    {id: 3, startPoint: 'Mstislavca4', endPoint: 'Turovsky', isFavorite: false, status: this.StatusEnum.completed},
    {id: 4, startPoint: 'Mstislavca5', endPoint: 'Turovsky', isFavorite: false, status: this.StatusEnum.declined},
    {id: 5, startPoint: 'Mstislavca5', endPoint: 'Turovsky', isFavorite: false, status: this.StatusEnum.completed},
    {id: 6, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: this.StatusEnum.declined},
    {id: 7, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: this.StatusEnum.declined},
    {id: 8, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: this.StatusEnum.declined},
    {id: 9, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: this.StatusEnum.declined},
    {id: 10, startPoint: 'Mstislavca11', endPoint: 'Turovsky', isFavorite: false, status: this.StatusEnum.declined},
    {id: 11, startPoint: 'Mstislavca12', endPoint: 'Turovsky', isFavorite: false, status: this.StatusEnum.declined},
  ];

  getTrips(){
    return this.trips;
  }
  setService(){
    this.trips = [];
  }
}
