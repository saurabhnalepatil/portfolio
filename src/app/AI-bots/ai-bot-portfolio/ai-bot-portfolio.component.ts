import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
interface Message {
  text: string | SafeHtml;
  sender: string;
}

interface BotResponse {
  response: string;
}
@Component({
  selector: 'app-ai-bot-portfolio',
  templateUrl: './ai-bot-portfolio.component.html',
  styleUrls: ['./ai-bot-portfolio.component.css']
})

export class AIBotPortfolioComponent {
  messages: Message[] = [];
  userInput: string = '';
  apiUrl: string = 'https://ai-chatbot-5qwd.onrender.com/converse';
  // apiUrl: string = 'http://127.0.0.1:8000/converse';
  isTyping = false;
  isVoiceEnabled: boolean = false;  
  isChatOpen: boolean = false;
  isListening: boolean = false;
  recognition: any;


  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  this.recognition = new SpeechRecognition();
  this.recognition.lang = 'en-US';
  this.recognition.interimResults = true; 
  this.recognition.maxAlternatives = 1;

  this.recognition.onresult = (event: any) => {
    let interimTranscript = '';
    let finalTranscript = '';

    for (let i = 0; i < event.results.length; i++) {
      const result = event.results[i];
      if (result.isFinal) {
        finalTranscript += result[0].transcript;
      } else {
        interimTranscript += result[0].transcript;
      }
    }

    this.userInput = finalTranscript || interimTranscript;
    
    if (finalTranscript) {
      this.isListening = false;
      this.sendMessage();
    }
  };

  this.recognition.onerror = (event: any) => {
    console.error('Speech recognition error:', event.error);
    this.isListening = false;
  };

  this.recognition.onend = () => {
    this.isListening = false;
    console.log('Voice input ended, mic turned off.');
  };
} else {
  console.error('Speech recognition is not supported in this browser.');
}

}

  ngOnInit() {
    
  }

  formatResponseToHTML(text: string): SafeHtml {
    const formatted = text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
      .replace(/^\d+\.\s(.+)$/gm, '<li>$1</li>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>(?:\n<li>.*<\/li>)*)/g, '<ul>$1</ul>')
      .replace(/(<li>.*<\/li>(?:\n<li>.*<\/li>)*)/g, '<ol>$1</ol>')
      .replace(/<\/li>\s*<li>/g, '</li><li>')
      .replace(/(?:\r?\n)+/g, '<br>')
      .replace(/<\/ul><br>/g, '</ul>')
      .replace(/<\/ol><br>/g, '</ol>');

    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }

  sendMessage(): void {
    if (this.userInput.trim()) {
      const payload = this.createPayload();
      this.messages.push({ text: this.userInput, sender: 'user' });
      this.userInput = '';
      this.getBotResponse(payload);
    }
  }

  private createPayload() {
    const user = localStorage.getItem('user');
    return {
      user_text: this.userInput,
      user_id: '3',
      company_id: 1
    };
  }

  getBotResponse(payload: any): void {
    // const token = localStorage.getItem('Token');
    // if (!token) {
    //   this.messages.push({ text: 'Authorization token is missing.', sender: 'bot' });
    //   console.error('Authorization token is missing.');
    //   return;
    // }

    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${token}`
    // });

    this.isTyping = true;

    this.http.post<BotResponse>(this.apiUrl, payload).subscribe(
      (response) => {
        this.isTyping = false;
        const sanitizedResponse = this.formatResponseToHTML(response?.response || 'No response available.');
        this.messages.push({ text: sanitizedResponse, sender: 'bot' });

        // If voice is enabled, speak the bot's response
        if (this.isVoiceEnabled) {
          this.speakLastMessage();
        }
      },
      (error) => {
        this.isTyping = false;
        this.messages.push({ text: 'Error fetching response from bot.', sender: 'bot' });
        console.error('API Error:', error);
      }
    );
  }

  speakLastMessage(): void {
    debugger
    const lastMessage = this.messages[this.messages.length - 1];
    if (lastMessage && lastMessage.sender === 'bot') {
      let plainText = typeof lastMessage.text === 'string'
        ? lastMessage.text
        : this.sanitizer.sanitize(1, lastMessage.text) || '';

      plainText = plainText.replace(/<[^>]+>/g, ''); 
      plainText = plainText.replace(/\n/g, ' '); 
      plainText = plainText.replace(/\s+/g, ' ').trim(); 

      const speech = new SpeechSynthesisUtterance(plainText);
      speech.lang = 'en-US';
      speechSynthesis.speak(speech);
    }
  }


  toggleVoice(): void {
    this.isVoiceEnabled = !this.isVoiceEnabled;
    if (this.isVoiceEnabled) {
      this.speakLastMessage(); 
    } else {
      speechSynthesis.cancel(); 
    }
  }

  toggleVoiceInput(): void {
    if (!this.isListening) {
      this.startVoiceInput(); 
    } else {
      this.stopVoiceInput(); 
    }
  }

  startVoiceInput(): void {
    if (this.recognition) {
      this.isListening = true; 
      this.recognition.start(); 
    }
  }

  stopVoiceInput(): void {
    if (this.recognition) {
      this.recognition.stop(); 
      this.isListening = false; 
    }
  }
  
}
