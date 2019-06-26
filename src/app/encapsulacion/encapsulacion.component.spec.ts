import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulacionComponent } from './encapsulacion.component';

describe('EncapsulacionComponent', () => {
  let component: EncapsulacionComponent;
  let fixture: ComponentFixture<EncapsulacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncapsulacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncapsulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
