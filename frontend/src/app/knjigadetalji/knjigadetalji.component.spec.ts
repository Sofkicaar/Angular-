import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigadetaljiComponent } from './knjigadetalji.component';

describe('KnjigadetaljiComponent', () => {
  let component: KnjigadetaljiComponent;
  let fixture: ComponentFixture<KnjigadetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnjigadetaljiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnjigadetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
