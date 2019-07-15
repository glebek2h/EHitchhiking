import {Component, OnInit, Inject} from '@angular/core';
import {BLACKLISTUSERS} from './blacklist-users';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

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
  constructor( public dialogRef: MatDialogRef<BlacklistComponent>) {}

  ngOnInit() {
    this.blacklistUsersArray = BLACKLISTUSERS;
    // this.data.currentMessage.subscribe(message => this.message = message);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  removePerson(item) {
    this.blacklistUsersArray.splice(item, 1);
  }

}
