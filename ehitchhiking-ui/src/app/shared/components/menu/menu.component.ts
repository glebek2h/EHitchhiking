import {Component, OnInit} from '@angular/core';
import { BUTTONS } from './buttons';
import {BlacklistComponent} from '../blacklist/blacklist.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  opened: boolean;
  buttonsArray = [];
  message: boolean;
  constructor(public dialog: MatDialog) { }


  ngOnInit() {
    this.buttonsArray = BUTTONS;
    // this.data.currentMessage.subscribe(message => this.message = message);
  }
  // newMassage() {
  //   this.message = !this.message;
  //   this.data.changeMessage(this.message);
  // }

  newMassage(): void {
    this.message = !this.message;
    const dialogRef = this.dialog.open(BlacklistComponent, {
      width: '400px',
      data: {
        message: this.message
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.message = true;
    });
  }

}
