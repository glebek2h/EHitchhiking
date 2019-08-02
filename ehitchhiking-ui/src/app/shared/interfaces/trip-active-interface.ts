import {UserState} from '@shared/enums/UserState';
import {UserInfoTrip} from '@shared/models/user-info-trip';
import { Car } from "@shared/models/car";

export interface TripActiveInterface {
	id: string;
	startPoint: string;
	endPoint: string;
	role: UserState;
	startTime: Date;
	endTime: Date;
	reservedSeats: number;
	showTripInfo: boolean;
	driver: UserInfoTrip;
	car: Car;
	passenger: UserInfoTrip[];
}
