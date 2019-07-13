import {Component, OnInit} from '@angular/core';
import ymaps from 'ymaps';
(window as any).global = window;
@Component({
	selector: 'yandex-map',
	templateUrl: './yandex-map.component.html',
	styleUrls: ['./yandex-map.component.sass'],
})
export class YandexMapComponent implements OnInit {

	constructor() {}

	ngOnInit() {
    ymaps
      .load()
      .then(maps => {
        const map = new maps.Map('map', {
          center: [-8.369326, 115.166023],
          zoom: 7
        });
      })
      .catch(error => console.log('Failed to load Yandex Maps', error));
	}
}
