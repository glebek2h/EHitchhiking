import { Component, OnInit, HostBinding } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.sass']
})
export class BlacklistComponent implements OnInit {
  message: boolean;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
}
