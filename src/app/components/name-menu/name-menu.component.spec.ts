import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameMenuComponent } from './name-menu.component';

describe('NameMenuComponent', () => {
  let component: NameMenuComponent;
  let fixture: ComponentFixture<NameMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
