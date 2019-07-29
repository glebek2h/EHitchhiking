import { UserState } from "../../enums/UserState";
import { TripStatus } from "../../enums/TripStatus";
import { DriverInfo } from "./driver-info";
import { PassengerInfo } from "./passenger-info";


export interface ActiveTrip {
  id: number;
  startPoint: string;
  endPoint: string;
  isFavorite: boolean;
  status: TripStatus;
  rating: number;
  role: UserState;
  date: string,
  time: string,
  reservedSeats: number,
  showTripInfo: boolean,
  driver: DriverInfo;
  passenger: PassengerInfo[]

}
