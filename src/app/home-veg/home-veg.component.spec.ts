import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVegComponent } from './home-veg.component';

describe('HomeVegComponent', () => {
  let component: HomeVegComponent;
  let fixture: ComponentFixture<HomeVegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
