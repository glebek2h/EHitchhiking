import {TripStatus} from '../enums/TripStatus';
import {UserState} from '../enums/UserState';

export interface TripHistory {
	id: number;
	startPoint: string;
	endPoint: string;
	saved: boolean;
	status: TripStatus;
	rating: number;
	role: UserState;
}
