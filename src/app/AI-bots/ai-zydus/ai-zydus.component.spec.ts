import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiZydusComponent } from './ai-zydus.component';

describe('AiZydusComponent', () => {
  let component: AiZydusComponent;
  let fixture: ComponentFixture<AiZydusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiZydusComponent]
    });
    fixture = TestBed.createComponent(AiZydusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
