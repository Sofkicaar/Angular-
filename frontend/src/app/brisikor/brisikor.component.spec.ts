import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrisikorComponent } from './brisikor.component';

describe('BrisikorComponent', () => {
  let component: BrisikorComponent;
  let fixture: ComponentFixture<BrisikorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrisikorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrisikorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
