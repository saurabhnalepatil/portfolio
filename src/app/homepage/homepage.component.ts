import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor() { }

  downloadResume(): void {
    // Replace 'assets/resume.pdf' with the path to your resume file
    const resumePath = 'assets/Saurabh_Nale_Resume.pdf';

    // Create an anchor element
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', resumePath);
    link.setAttribute('download', 'resume.pdf'); // Set the default download filename

    // Simulate a click event to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
