import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTitleComponent } from './body-title.component';

describe('BodyTitleComponent', () => {
  let component: BodyTitleComponent;
  let fixture: ComponentFixture<BodyTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
