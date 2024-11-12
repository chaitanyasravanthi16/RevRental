import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagvehiclesComponent } from './managvehicles.component';

describe('ManagvehiclesComponent', () => {
  let component: ManagvehiclesComponent;
  let fixture: ComponentFixture<ManagvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagvehiclesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
