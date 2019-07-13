import { Component, OnInit } from '@angular/core';
import { BUTTONS_NAMES } from './buttons-names';
import {MatDialog} from '@angular/material';
import {RatePassengersModalComponent} from '../rate-passengers-modal/rate-passengers-modal.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  opened: boolean;
  buttonsArray = [];

  constructor(public dialog: MatDialog) { }

  openRatePassengersDialog(): void {
    const dialogRef = this.dialog.open(RatePassengersModalComponent, {
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
