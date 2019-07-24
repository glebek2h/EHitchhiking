import {Component, OnInit} from '@angular/core';
import {BLACKLISTUSERS, CUR_USER} from './blacklist-users';
import {MatDialogRef} from '@angular/material';
import {LoaderSize} from '@shared/enums/pre-loader-sizes';
import {NoDataSize} from '@shared/enums/no-data-sizes';
import {ApiService} from "@shared/services/api.service";
import {URL_REGISTRY} from "@shared/constants/urlRegistry";
import {User} from "@shared/models/user";

@Component({
	selector: 'app-blacklist',
	templateUrl: './blacklist.component.html',
	styleUrls: ['./blacklist.component.sass'],
  providers: [ApiService]
})
export class BlacklistComponent implements OnInit {
	blacklistUsersArray: User[] = [];
	curUser: User = CUR_USER;
	loaderSize: LoaderSize = LoaderSize.Large;
	noDataSize: NoDataSize = NoDataSize.Small;
	noDataMessage = 'No users!';
	noDataIconName = 'accessibility';
	loading = true;
	constructor(public dialogRef: MatDialogRef<BlacklistComponent>,
              private apiService: ApiService) {}

	ngOnInit() {
		this.blacklistUsersArray = BLACKLISTUSERS;
		setTimeout(() => {
			this.loading = false;
		}, 1000);
		this.apiService.doGet(URL_REGISTRY['blacklist.get'],false,{
		  idDr: this.curUser.id
    }).subscribe(data => {
    //
    });
	}

	close(): void {
		this.dialogRef.close();
	}



	removePerson(item) {
    this.apiService.doDelete(URL_REGISTRY['blacklist.delete'], false, {
      idPas: this.blacklistUsersArray[item].id,idDr: this.curUser.id}).subscribe(data => console.log(data));
    this.blacklistUsersArray.splice(item, 1);
  }
}
