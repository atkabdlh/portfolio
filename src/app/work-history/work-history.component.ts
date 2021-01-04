import { Component, OnInit } from '@angular/core';
import Details from "../../assets/details.json";

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {
  workHistory: object[] = Details.workHistory;

  constructor() { }

  ngOnInit(): void {
  }

}
