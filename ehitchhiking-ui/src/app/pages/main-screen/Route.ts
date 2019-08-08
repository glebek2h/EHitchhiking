import ymaps from 'ymaps';
import MultiRouteModel = ymaps.multiRouter.MultiRouteModel;
import {Car} from '@shared/models/car';
export interface Route {
	from: string;
	to: string;
	departureDate: Date;
	departureTime: string;
	placesSelect: number;
	tripDuration: string;
	routeColor: string;
	passengerCoordinate: number[];
	driverRating: number;
	car: Car;
	displayed: boolean;
	yandexRoute: MultiRouteModel;
	distance: number;
}
