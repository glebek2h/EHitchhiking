import { Component, OnInit } from '@angular/core';
import { BUTTONS_NAMES } from './buttons-names';
import {MatDialog} from '@angular/material';
import {RatePassangersModalComponent} from '../rate-passangers-modal/rate-passangers-modal.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  opened: boolean;
  buttonsArray = [];

  constructor(public dialog: MatDialog) { }

  openRatePassangersDialog(): void {
    const dialogRef = this.dialog.open(RatePassangersModalComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

    ngOnInit() {
      this.buttonsArray = BUTTONS_NAMES;
    }

}
