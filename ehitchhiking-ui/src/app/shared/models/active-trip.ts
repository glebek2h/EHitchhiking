import {UserState} from '@shared/enums/UserState';
import {UserInfoTrip} from '@shared/models/user-info-trip';
import {TripActiveInterface} from '@shared/interfaces/trip-active-interface';
import { Car } from "@shared/models/car";

export class ActiveTrip implements TripActiveInterface{
  id: string;
  startPoint: string;
  endPoint: string;
  role: UserState;
  startTime: string;
  endTime: string;
  reservedSeats: number;
  showTripInfo: boolean;
  driver: UserInfoTrip;
  car: Car;
  passenger: UserInfoTrip[];

	constructor(
		id: string = '',
		startPoint: string = '',
		endPoint: string = '',
		role: UserState,
		startTime: string,
		endTime: string,
		reservedSeats: number = 0,
		showTripInfo: boolean = false,
		driver: UserInfoTrip,
		car: Car,
		passenger: UserInfoTrip[]
	) {
		this.id = id;
		this.startPoint = startPoint;
		this.endPoint = endPoint;
		this.role = role;
		this.startTime = startTime;
		this.endTime = endTime;
		this.reservedSeats = reservedSeats;
		this.showTripInfo = showTripInfo;
		this.driver = driver;
		this.car = car;
		this.passenger = passenger;
	}
}
