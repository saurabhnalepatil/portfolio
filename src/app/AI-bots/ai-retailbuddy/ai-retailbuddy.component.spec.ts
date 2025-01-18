import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiRetailbuddyComponent } from './ai-retailbuddy.component';

describe('AiRetailbuddyComponent', () => {
  let component: AiRetailbuddyComponent;
  let fixture: ComponentFixture<AiRetailbuddyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiRetailbuddyComponent]
    });
    fixture = TestBed.createComponent(AiRetailbuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
