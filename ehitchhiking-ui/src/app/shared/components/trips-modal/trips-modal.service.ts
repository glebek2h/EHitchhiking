import { Trip } from "./trips";
import {TripStatus} from "../../enums/TripStatus";


export class TripsModalService {

  constructor() { }

  trips: Trip[] = [
    {id: 0, startPoint: 'Mstislavca1', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.active },
    {id: 1,startPoint: 'Mstislavca2', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.active},
    {id: 2, startPoint: 'Mstislavca3', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.completed},
    {id: 3, startPoint: 'Mstislavca4', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.completed},
    {id: 4, startPoint: 'Mstislavca5', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.declined},
    {id: 5, startPoint: 'Mstislavca5', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.completed},
    {id: 6, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.declined},
    {id: 7, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.declined},
    {id: 8, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.declined},
    {id: 9, startPoint: 'Mstislavca6', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.declined},
    {id: 10, startPoint: 'Mstislavca11', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.declined},
    {id: 11, startPoint: 'Mstislavca12', endPoint: 'Turovsky', isFavorite: false, status: TripStatus.declined},
  ];

  getTrips(){
    return this.trips;
  }
  setService(){
    this.trips = [];
  }
}
