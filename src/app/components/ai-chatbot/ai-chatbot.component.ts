import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BotService } from 'src/app/services/bot.service';

interface Message {
  text: string | SafeHtml;
  sender: string;
}

interface BotResponse {
  response: string;
}

@Component({
  selector: 'app-ai-chatbot',
  templateUrl: './ai-chatbot.component.html',
  styleUrls: ['./ai-chatbot.component.css']
})
export class AiChatbotComponent {
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
    private botService: BotService
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
    }
    else {
      console.error('Speech recognition is not supported in this browser.');
    }
    this.botService.botModalStatus$.subscribe(status => {
      this.isChatOpen = status;
    });
  }

  ngOnInit() {
    this.sendMessage();
    setTimeout(() => {
      const initialPayload = {
        user_text: 'Hi',
        user_id: '3',
        company_id: 1
      };
      this.getBotResponse(initialPayload);
    }, 1000);
    // setTimeout(() => {
    //   const initialPayload = {
    //     user_text: 'Who are you? What purpose you build your Developer? Tell your developer basic info me?',
    //     user_id: '3',
    //     company_id: 1
    //   };
    //   this.getBotResponse(initialPayload);
    // }, 2000);  // Simulating a short delay before calling the server
  }
  modelClose() {
    this.isChatOpen = false;
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
      user_text: this.userInput ? this.userInput : "Hi",
      user_id: '3',
      company_id: 1
    };
  }

  // getBotResponse(payload: any): void {
  //   // const token = localStorage.getItem('Token');
  //   // if (!token) {
  //   //   this.messages.push({ text: 'Authorization token is missing.', sender: 'bot' });
  //   //   console.error('Authorization token is missing.');
  //   //   return;
  //   // }

  //   // const headers = new HttpHeaders({
  //   //   Authorization: `Bearer ${token}`
  //   // });

  //   this.isTyping = true;

  //   this.http.post<BotResponse>(this.apiUrl, payload).subscribe(
  //     (response) => {
  //       this.isTyping = false;
  //       const sanitizedResponse = this.formatResponseToHTML(response?.response || 'No response available.');
  //       this.messages.push({ text: sanitizedResponse, sender: 'bot' });

  //       // If voice is enabled, speak the bot's response
  //       if (this.isVoiceEnabled) {
  //         this.speakLastMessage();
  //       }
  //     },
  //     (error) => {
  //       this.isTyping = false;
  //       this.messages.push({ text: 'Error fetching response from bot.', sender: 'bot' });
  //       console.error('API Error:', error);
  //     }
  //   );
  // }


  getBotResponse(payload: any): void {
    this.isTyping = true;

    const timeout1 = setTimeout(() => {
      this.messages.push({ text: 'Hey there! Just a moment while I get ready...', sender: 'bot' });
    }, 7000);

    const timeout2 = setTimeout(() => {
      this.messages.push({ text: 'Almost there! Setting things up for you...', sender: 'bot' });
    }, 14000);

    const timeout3 = setTimeout(() => {
      this.messages.push({ text: 'Thanks for your patience! Feel free to ask me anything.', sender: 'bot' });
    }, 21000);

    const timeout4 = setTimeout(() => {
      this.messages.push({ text: 'Still here? I’m working on it, won’t be long now!', sender: 'bot' });
    }, 28000);

    const timeout5 = setTimeout(() => {
      this.messages.push({ text: 'You can ask questions like: "What services do you offer?" or "Tell me about Saurabh?"', sender: 'bot' });
    }, 35000);

    const timeout6 = setTimeout(() => {
      this.messages.push({ text: 'Hey, my backend is deployed on a cold start server, which may take a few moments to wake up.', sender: 'bot' });
    }, 55000);

    const timeout7 = setTimeout(() => {
      this.messages.push({ text: 'If you are experiencing delays, you may try rephrasing your question or checking your connection.', sender: 'bot' });
    }, 120000);

    this.http.post<BotResponse>(this.apiUrl, payload).subscribe(
      (response) => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
        clearTimeout(timeout5);
        clearTimeout(timeout6);
        clearTimeout(timeout7);
        
        this.isTyping = false;
        const sanitizedResponse = this.formatResponseToHTML(response?.response || 'No response available.');
        this.messages.push({ text: sanitizedResponse, sender: 'bot' });

        if (this.isVoiceEnabled) {
          this.speakLastMessage();
        }
      },
      (error) => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
        clearTimeout(timeout5);
        clearTimeout(timeout6);
        clearTimeout(timeout7);

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

