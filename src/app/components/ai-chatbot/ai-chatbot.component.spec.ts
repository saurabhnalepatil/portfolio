import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChatbotComponent } from './ai-chatbot.component';

describe('AiChatbotComponent', () => {
  let component: AiChatbotComponent;
  let fixture: ComponentFixture<AiChatbotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiChatbotComponent]
    });
    fixture = TestBed.createComponent(AiChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
