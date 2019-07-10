import {Component, OnInit, HostListener, Input} from '@angular/core';
import { BUTTONS } from './buttons';
import {BlacklistComponent} from '../blacklist/blacklist.component';
import {DataService} from "../../services/data.service";

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
  constructor(private data: DataService) { }


  ngOnInit() {
    this.buttonsArray = BUTTONS;
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  newMassage() {
    this.message = !this.message;
    this.data.changeMessage(this.message);
  }

}
