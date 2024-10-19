import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretrazikorComponent } from './pretrazikor.component';

describe('PretrazikorComponent', () => {
  let component: PretrazikorComponent;
  let fixture: ComponentFixture<PretrazikorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretrazikorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PretrazikorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
