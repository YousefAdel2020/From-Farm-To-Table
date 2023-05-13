import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDishesComponent } from './home-dishes.component';

describe('HomeDishesComponent', () => {
  let component: HomeDishesComponent;
  let fixture: ComponentFixture<HomeDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
