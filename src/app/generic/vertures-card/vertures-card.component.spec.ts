import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerturesCardComponent } from './vertures-card.component';

describe('VerturesCardComponent', () => {
  let component: VerturesCardComponent;
  let fixture: ComponentFixture<VerturesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerturesCardComponent]
    });
    fixture = TestBed.createComponent(VerturesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
