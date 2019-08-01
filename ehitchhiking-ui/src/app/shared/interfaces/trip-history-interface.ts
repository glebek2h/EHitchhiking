import {TripStatus} from '../enums/TripStatus';
import {UserState} from '../enums/UserState';

export interface TripHistory {
	id: number;
	startPoint: string;
	endPoint: string;
	isFavorite: boolean;
	status: TripStatus;
	rating: number;
	role: UserState;
}
