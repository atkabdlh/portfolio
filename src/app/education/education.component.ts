import { Component, OnInit } from '@angular/core';
import Details from "../../assets/details.json";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educations: object[] = Details.education;
  title: string = 'Education';

  constructor() { }

  ngOnInit(): void {
  }

}
