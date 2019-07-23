import {TripStatus} from '../../enums/TripStatus';

export interface Trip {
	id: number;
	startPoint: string;
	endPoint: string;
	isFavorite: boolean;
	status: TripStatus;
	rating: number;
}
