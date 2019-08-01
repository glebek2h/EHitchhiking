import {TripStatus} from '@shared/enums/TripStatus';
import {UserState} from '@shared/enums/UserState';
import {UserInfoTrip} from '@shared/models/user-info-trip';

export class ActiveTrip {
	id: string;
	startPoint: string;
	endPoint: string;
	isFavorite: boolean;
	status: TripStatus;
	rating: number;
	role: UserState;
	date: string;
	time: string;
	reservedSeats: number;
	showTripInfo: boolean;
	driver: UserInfoTrip;
	passenger: UserInfoTrip[];

	constructor(
		id: string = '',
		startPoint: string = '',
		endPoint: string = '',
		isFavorite: boolean = false,
		status: TripStatus,
		rating: number = 0,
		role: UserState,
		date: string = '',
		time: string = '',
		reservedSeats: number = 0,
		showTripInfo: boolean = false,
		driver: UserInfoTrip,
		passenger: UserInfoTrip[]
	) {
		this.id = id;
		this.startPoint = startPoint;
		this.endPoint = endPoint;
		this.isFavorite = isFavorite;
		this.status = status;
		this.rating = rating;
		this.role = role;
		this.date = date;
		this.time = time;
		this.reservedSeats = reservedSeats;
		this.showTripInfo = showTripInfo;
		this.driver = driver;
		this.passenger = passenger;
	}
}
