import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleImgComponent } from './single-img.component';

describe('SingleImgComponent', () => {
  let component: SingleImgComponent;
  let fixture: ComponentFixture<SingleImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
