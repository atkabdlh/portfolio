import { Component, OnInit } from '@angular/core';
import Details from "../../assets/details.json";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skills: object[] = Details.skillsList;

  constructor() { }

  ngOnInit(): void {
  }

}
