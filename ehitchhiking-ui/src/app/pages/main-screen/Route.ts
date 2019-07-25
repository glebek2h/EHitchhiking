import {Car} from "@shared/models/car";

export interface Route {
  from: string;
  to: string;
  departureDate: Date;
  departureTime: string;
  placesSelect: number;
  tripDuration: string;
  routeColor: string;
  passengers: any[];
  driverRating: number;
  car: Car
}
