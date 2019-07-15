import {Component, OnInit} from '@angular/core';
import ymaps from 'ymaps';

@Component({
	selector: 'yandex-map',
	templateUrl: './yandex-map.component.html',
	styleUrls: ['./yandex-map.component.sass'],
})
export class YandexMapComponent implements OnInit {
	constructor() {}
	ngOnInit() {
		ymaps
			.load(
				'https://api-maps.yandex.ru/2.1/?apikey=05c4e476-2248-4d27-836c-4a6c7c45e485&lang=ru_RU'
			)
			.then((maps) => {
				const map = new maps.Map('map', {
					center: [-8.369326, 115.166023],
					zoom: 7,
				});
			})
			.catch((error) => console.log('Failed to load Yandex Maps', error));
	}
}
