import {Component, OnInit, Inject} from '@angular/core';
import {BLACKLISTUSERS} from './blacklist-users';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BlacklistService} from '../../services/blacklist.service';

export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.sass']
})
export class BlacklistComponent implements OnInit {
  message: boolean;
  blacklistUsersArray = [];
  constructor( public dialogRef: MatDialogRef<BlacklistComponent>,
               private blacklistService: BlacklistService) {}

  ngOnInit() {
    this.blacklistUsersArray = BLACKLISTUSERS;
    // this.data.currentMessage.subscribe(message => this.message = message);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // @ts-ignore
/*  delete(person: BLACKLISTUSERS): void {
    this.blacklistUsersArray = this.blacklistUsersArray.filter(h => h !== person);
    this.blacklistService.deletePerson(person).subscribe();
  }*/

}
