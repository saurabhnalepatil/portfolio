import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor() { }
  private isOpenBotModal = new BehaviorSubject<boolean>(false);

  botModalStatus$ = this.isOpenBotModal.asObservable();

  openBotModule() {
    this.isOpenBotModal.next(true);
  }

  closeBotModule() {
    this.isOpenBotModal.next(false);
  }
}
