import { Component, OnInit } from '@angular/core';
import { BUTTONS } from './buttons';
import { MenuRatePassangersService } from '../../services/menu-rate-passangers.service';

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

  constructor(private data: MenuRatePassangersService) { }

  ngOnInit() {
    this.buttonsArray = BUTTONS;
  }
  newMessage() {
    this.message = !this.message;
    this.data.changeMessage(this.message);
  }

}
