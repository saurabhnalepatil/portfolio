import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Message {
  text: string | SafeHtml;
  sender: string;
}

interface BotResponse {
  response: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: Message[] = [];
  userInput: string = '';
  apiUrl: string = 'http://127.0.0.1:8000/converse';
  isTyping = false;

  companyData: { [key: string]: number } = {
    "Retail Control Systems": 1,
    "CBS Tech": 2,
    "Goodwill (GINM)": 10,
    "RCS DEMO": 22,
    "Goodwill NMI": 28,
    "DC Goodwill": 32,
    "DemoCompany": 33,
    "Proma Group LTD": 48,
    "Demo RCS Company": 49,
    "TestCompany": 74,
    "RCS": 75,
    "priya lagade": 76,
    "test": 79,
    "Second Wind Industries": 81
  };

  selectedCompany: keyof typeof this.companyData = "Retail Control Systems";

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  formatResponseToHTML(text: string): SafeHtml {
    const formatted = text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/- (.+)/g, '<li>$1</li>')
      .replace(/\n/g, '<br>')
      .replace(/(\d+\.) /g, '<strong>$1</strong>');

    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }

  sendMessage(): void {
    if (this.userInput.trim()) {
      const companyId = this.companyData[this.selectedCompany];
      const payload = this.createPayload(companyId);

      this.messages.push({ text: this.userInput, sender: 'user' });
      this.userInput = '';
      this.getBotResponse(payload);
    }
  }

  private createPayload(companyId: number) {
    return {
      user_text: this.userInput,
      user_id: '3',
      company_id: companyId.toString()
    };
  }

  getBotResponse(payload: any): void {
    this.isTyping = true;
    this.http.post<BotResponse>(this.apiUrl, payload).subscribe(
      (response) => {
        this.isTyping = false;
        const sanitizedResponse = this.formatResponseToHTML(response?.response || 'No response available.');
        this.messages.push({ text: sanitizedResponse, sender: 'bot' });
      },
      (error) => {
        this.isTyping = false;
        this.messages.push({ text: 'Error fetching response from bot.', sender: 'bot' });
        console.error('API Error:', error);
        // Log the error response for more details
        if (error.status) {
          console.error(`HTTP Error Status: ${error.status}`);
        }
        if (error.error) {
          console.error(`Error Message:`, error.error);
        }
      }
    );
  }

  // If you need to get the company names dynamically, use Object.keys()
  getCompanyNames(): string[] {
    return Object.keys(this.companyData);
  }
}
