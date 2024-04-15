import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorksComponent } from './my-works.component';

describe('MyWorksComponent', () => {
  let component: MyWorksComponent;
  let fixture: ComponentFixture<MyWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWorksComponent]
    });
    fixture = TestBed.createComponent(MyWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
