import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewodersComponent } from './viewoders.component';

describe('ViewodersComponent', () => {
  let component: ViewodersComponent;
  let fixture: ComponentFixture<ViewodersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewodersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewodersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
