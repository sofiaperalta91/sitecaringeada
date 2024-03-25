import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvEventsGigsComponent } from './tv-events-gigs.component';

describe('TvEventsGigsComponent', () => {
  let component: TvEventsGigsComponent;
  let fixture: ComponentFixture<TvEventsGigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvEventsGigsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvEventsGigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
