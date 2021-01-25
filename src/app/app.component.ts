import {Component, ElementRef, ViewChild} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import {image} from "html2canvas/dist/types/css/types/image";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  @ViewChild('resumeComp', { read: ElementRef}) myResume:ElementRef;

  printPdf() {
    let link = document.createElement("a");
    link.download = "resume.pdf";
    link.href = "assets/resume.pdf";
    link.click();

    // let data = this.myResume.nativeElement;

    // html2canvas(data).then(function (canvas) {
    //   console.log(canvas);
    //   let image = canvas.toDataURL('image/png', 0.9);
    //   let doc = new jsPDF('p', 'mm', 'a4');
    //   doc.addImage(image, 'PNG', 0, 0, 208, (canvas.height *208 / canvas.width));
    //   doc.save('resume.pdf');
    // });

    // console.log('hold on, printing pdf...');
    // html2canvas(data).then(function(canvas) {
    //   let doc = new jsPDF('p', 'mm', 'a4');
    //   let base64 = canvas.toDataURL('image/png', 0.9);
    //   let image = new Image();
    //   image.src = base64;
    //   image.onload = function() {
    //     console.log('jalan');
    //     doc.addImage(image.src, 'PNG', 0, 0, 208, (canvas.height * 208 / canvas.width));
    //     doc.save('resume.pdf');
    //   }
    // });
  }

  printCoverLetter() {
    let link = document.createElement("a");
    link.download = "cover_letter.pdf";
    link.href = "assets/cover_letter.pdf";
    link.click();
  }
}
