import {UserService} from '@shared/services/user.service';
import {AuthorizationService} from './../../services/authorization.service';
import {Component, OnInit} from '@angular/core';
import {BUTTONS_NAMES} from './buttons-names';
import {MatDialog} from '@angular/material';
import {ProfileModalComponent} from '@shared/modals/profile-modal/profile-modal.component';
import {DEFAULT_MAT_DIALOG_CLASS, MAT_DIALOG_WIDTH_MD, MAT_DIALOG_WIDTH_SM} from '@shared/constants/modal-constants';
import {BlacklistComponent} from '@shared/components/blacklist/blacklist.component';
import {TripsModalComponent} from '../trips-modal/trips-modal.component';
import {ChatComponent} from '@shared/components/chat-data/chat/chat.component';
import {NotificationService} from '@shared/services/notification.service';
import {ActiveTripsModalComponent} from '@shared/components/active-trips-modal/active-trips-modal.component';
import {User} from '@shared/models/user';
@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.sass'],
	providers: [NotificationService],
})
export class MenuComponent implements OnInit {
	opened: boolean;
	buttonsArray = [];
	currentUser: User;

	constructor(
		public dialog: MatDialog,
		private authorizationService: AuthorizationService,
		private userService: UserService
	) {}

	ngOnInit() {
		this.currentUser = this.userService.getCurrentUser();
		this.buttonsArray = BUTTONS_NAMES;
	}
	openBlacklistDialog(): void {
		this.dialog.open(BlacklistComponent, {
			width: MAT_DIALOG_WIDTH_SM,
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
			disableClose: true,
		});
	}

	logOut() {
		this.authorizationService.logOut();
	}

	openHistoryDialog() {
		this.dialog.open(TripsModalComponent, {
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
			width: MAT_DIALOG_WIDTH_MD,
		});
	}

	openActiveDialog() {
		this.dialog.open(ActiveTripsModalComponent, {
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
			width: MAT_DIALOG_WIDTH_MD,
		});
	}

	openProfileDialog(): void {
		this.dialog.open(ProfileModalComponent, {
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
			width: '40rem',
			height: '60%',
		});
	}

	openChatDialog(): void {
		this.dialog.open(ChatComponent, {
			width: MAT_DIALOG_WIDTH_SM,
			panelClass: DEFAULT_MAT_DIALOG_CLASS,
			autoFocus: false,
			disableClose: true,
		});
	}
}
