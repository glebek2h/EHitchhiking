import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainScreenComponent} from './main-screen-component/main-screen.component';
import {MatButtonModule, MatButtonToggleModule} from '@angular/material';
import {YandexMapComponent} from './yandex-map/yandex-map.component';
import {MenuModule} from "../../shared/components/menu/menu.module";

@NgModule({
	declarations: [MainScreenComponent, YandexMapComponent],
	imports: [CommonModule, MenuModule, MatButtonToggleModule, MatButtonModule],
	exports: [MainScreenComponent],
})
export class MainScreenModule {}
