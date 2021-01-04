import { Component, OnInit } from '@angular/core';
import Details from "../../assets/details.json";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fullname: string = Details.fullname;
  phoneNo: string = Details.phoneNo;
  email: string = Details.email;
  websites: string[] = Details.websites;

  constructor() { }

  ngOnInit(): void {
  }

}
