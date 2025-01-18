import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-zydus',
  templateUrl: './ai-zydus.component.html',
  styleUrls: ['./ai-zydus.component.css']
})
export class AiZydusComponent {
  userMessage: string = '';

  handleAction(action: string): void {
    alert(`You selected: ${action}`);
  }

  sendMessage(): void {
    if (this.userMessage.trim()) {
      alert(`Message sent: ${this.userMessage}`);
      this.userMessage = ''; // Clear the input field
    }
  }
}
