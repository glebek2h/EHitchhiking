import { Component, OnInit } from '@angular/core';
import { BUTTONS } from './buttons';
import { MenuRatePassangersService } from '../../services/menu-rate-passangers.service';
import {MatDialog} from '@angular/material';
import {RatePassangScreenComponent} from '../rate-passang-screen/rate-passang-screen.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  buttonsArray = [];
  message: boolean;

 /* constructor(private data: MenuRatePassangersService) { }*/

 /* newMessage() {
    this.message = !this.message;
    this.data.changeMessage(this.message);
  }*/

  constructor(public dialog: MatDialog) { }

  newMessage(): void {
    this.message = !this.message;
    const dialogRef = this.dialog.open(RatePassangScreenComponent, {
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

    ngOnInit() {
      this.buttonsArray = BUTTONS;
    }

}
