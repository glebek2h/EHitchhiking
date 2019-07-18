import { Component, OnInit } from '@angular/core';
import { LoaderSize } from "../../enums/pre-loader-sizes";
import { MatDialogRef } from "@angular/material";
import { HISTORIES } from "./trips";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.sass']
})
export class TripsComponent implements OnInit {
  tripsArray = [];
  size: LoaderSize = LoaderSize.Large;
  loading = true;
  constructor(public dialogRef: MatDialogRef<TripsComponent>) {}

  ngOnInit() {
    console.log(HISTORIES);
    this.tripsArray = HISTORIES;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  exit(): void {
    this.dialogRef.close();
  }
  replase_all(): void{
    this.tripsArray = [];
  }

  favorite(i): void{
    document.getElementById('favorite-'+i).innerHTML =
      `<i class="btn-press-favorite material-icons" >favorite</i>`
  }

}
