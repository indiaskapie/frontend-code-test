import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaImgsComponent } from './nasa-imgs.component';

describe('NasaImgsComponent', () => {
  let component: NasaImgsComponent;
  let fixture: ComponentFixture<NasaImgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaImgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
