import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClippingComponent } from './clipping.component';

describe('ClippingComponent', () => {
  let component: ClippingComponent;
  let fixture: ComponentFixture<ClippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClippingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
