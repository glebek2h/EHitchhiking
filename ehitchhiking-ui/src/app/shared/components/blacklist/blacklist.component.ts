import {Component, OnInit } from '@angular/core';
import {BLACKLISTUSERS} from './blacklist-users';
import { MatDialogRef} from '@angular/material';

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
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  removePerson(item) {
    this.blacklistUsersArray.splice(item, 1);
  }

}
