import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionlogsComponent } from './actionlogs.component';

describe('ActionlogsComponent', () => {
  let component: ActionlogsComponent;
  let fixture: ComponentFixture<ActionlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionlogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
