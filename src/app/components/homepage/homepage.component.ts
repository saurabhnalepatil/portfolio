import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  isNavOpen: boolean = false;
  constructor() { }

  downloadResume(): void {
    const resumePath = 'assets/SaurabhNaleResume.pdf';

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', resumePath);
    link.setAttribute('download', 'resume.pdf');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  @HostListener('document:touchstart', ['$event'])
  closeNavOnClickOutside(event: TouchEvent) {
    this.closeNav()
  }

  closeNav() {
    this.isNavOpen = false;
  }
}
