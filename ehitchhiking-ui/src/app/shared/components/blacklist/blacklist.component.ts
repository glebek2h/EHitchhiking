import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {LoaderSize} from '@shared/enums/pre-loader-sizes';
import {NoDataSize} from '@shared/enums/no-data-sizes';
import {ApiService} from "@shared/services/api.service";
import {URL_REGISTRY} from "@shared/constants/urlRegistry";
import {User} from "@shared/models/user";
import {BLACKLIST_DRIVERS, BLACKLIST_PASSENGERS, CUR_USER} from "@shared/components/blacklist/blacklist-users";

@Component({
	selector: 'app-blacklist',
	templateUrl: './blacklist.component.html',
	styleUrls: ['./blacklist.component.sass'],
  providers: [ApiService]
})
export class BlacklistComponent implements OnInit {
  blacklistDriverArray: User[] = [];
  blacklistPassengerArray: User[] = [];
	curUser: User = CUR_USER;
	loaderSize: LoaderSize = LoaderSize.Large;
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'No users!';
	noDataIconName = 'accessibility';
  loadingDrives = true;
  loadingPassengers = true;
	constructor(public dialogRef: MatDialogRef<BlacklistComponent>,private apiService: ApiService) {}

	ngOnInit() {
		this.blacklistDriverArray = BLACKLIST_DRIVERS;
		this.blacklistPassengerArray = BLACKLIST_PASSENGERS;
		setTimeout(() => {
			this.loadingDrives = false;
		}, 1000);
		setTimeout(() => {
			this.loadingPassengers = false;
		}, 2000);
		this.apiService.doGet(URL_REGISTRY['blacklist.get'],false,{
		  idDr: this.curUser.id
    }).subscribe(data => {
    //
    });
	}

	close(): void {
		this.dialogRef.close();
	}

  removePersonFromDriverBlacklist(item) {
    this.apiService.doDelete(URL_REGISTRY['blacklist.delete'], false, {
      idPas: this.blacklistDriverArray[item].id,idDr: this.curUser.id}).subscribe(data => console.log(data));
    this.blacklistDriverArray.splice(item, 1);
  }

  removePersonFromPassengerBlacklist(item) {
    this.apiService.doDelete(URL_REGISTRY['blacklist.delete'], false, {
      idPas: this.blacklistPassengerArray[item].id,idDr: this.curUser.id}).subscribe(data => console.log(data));
    this.blacklistPassengerArray.splice(item, 1);
  }
}
