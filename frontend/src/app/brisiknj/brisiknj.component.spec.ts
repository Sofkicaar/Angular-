import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrisiknjComponent } from './brisiknj.component';

describe('BrisiknjComponent', () => {
  let component: BrisiknjComponent;
  let fixture: ComponentFixture<BrisiknjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrisiknjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrisiknjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
