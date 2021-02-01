import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Data from '../assets/data.json';
import { EmailService } from './email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  emailForm = new FormGroup({
    email: new FormControl('')
  });

  about: string[] = Data.aboutMe;
  projects: object[] = Data.projects;

  constructor(private emailService: EmailService) {}

  // tslint:disable-next-line:typedef
  reset() {
    this.emailForm.reset();
  }

  // tslint:disable-next-line:typedef
  keepEmail(data) {
    console.log(data);
    this.emailService.createItem(data);
    this.reset();
  }
}
