import {Component, OnInit} from '@angular/core';
import {NotificationService} from './shared/services/notification.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	providers: [NotificationService],
})
export class AppComponent implements OnInit {
	ngOnInit() {}
}
