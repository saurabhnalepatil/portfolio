import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor() { }

  downloadResume(): void {
    const resumePath = 'assets/Saurabh_Nale_Resume.pdf';

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', resumePath);
    link.setAttribute('download', 'resume.pdf'); 

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
