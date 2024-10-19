import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromeniComponent } from './promeni.component';

describe('PromeniComponent', () => {
  let component: PromeniComponent;
  let fixture: ComponentFixture<PromeniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromeniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
