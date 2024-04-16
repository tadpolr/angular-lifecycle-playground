import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherplaygroundComponent } from './anotherplayground.component';

describe('AnotherplaygroundComponent', () => {
  let component: AnotherplaygroundComponent;
  let fixture: ComponentFixture<AnotherplaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherplaygroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnotherplaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
