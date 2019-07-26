import {TripStatus} from '../../enums/TripStatus';
import {UserState} from "../../enums/UserState";

export interface Trip {
	id: number;
	startPoint: string;
	endPoint: string;
	isFavorite: boolean;
	status: TripStatus;
	rating: number;
  role: UserState;
}
