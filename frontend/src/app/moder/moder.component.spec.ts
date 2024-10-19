import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerComponent } from './moder.component';

describe('ModerComponent', () => {
  let component: ModerComponent;
  let fixture: ComponentFixture<ModerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
