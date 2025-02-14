import { Component, HostListener } from '@angular/core';
import { BotService } from 'src/app/services/bot.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  isNavOpen: boolean = false;
  showBotModalButton: boolean = true;
  isChatOpen = false;

  constructor(private botService: BotService) {
  }

  downloadResume(): void {
    const resumePath = 'assets/Saurabh_Fullstack_Resume.pdf';
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
  modelClose() {
    this.botService.closeBotModule();
  }
  closeNav() {
    this.isNavOpen = false;
  }
  openBot() {
    this.botService.openBotModule();
  }
}
