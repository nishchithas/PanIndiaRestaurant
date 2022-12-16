import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hours-location',
  templateUrl: './hours-location.component.html',
  styleUrls: ['./hours-location.component.css']
})
export class HoursLocationComponent implements OnInit {
  address = '16 E State St,';
  city = 'Hermitage, DE1 3BA';
  phoneNum = '07741086478';
  monHours = 'Closed';
  tuesThursHours = '4 — 8:30PM';
  friSatHours = '12 — 9PM';
  sunHours = '3 — 8PM';

  constructor() { }

  ngOnInit(): void {
  }

}
