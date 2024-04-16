import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentplaygroundComponent } from './contentplayground.component';

describe('ContentplaygroundComponent', () => {
  let component: ContentplaygroundComponent;
  let fixture: ComponentFixture<ContentplaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentplaygroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentplaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
