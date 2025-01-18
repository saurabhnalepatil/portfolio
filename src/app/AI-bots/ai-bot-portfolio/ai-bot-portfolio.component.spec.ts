import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIBotPortfolioComponent } from './ai-bot-portfolio.component';

describe('AIBotPortfolioComponent', () => {
  let component: AIBotPortfolioComponent;
  let fixture: ComponentFixture<AIBotPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AIBotPortfolioComponent]
    });
    fixture = TestBed.createComponent(AIBotPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
