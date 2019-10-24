import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRouteInfoComponent } from './show-route-info.component';

describe('ShowRouteInfoComponent', () => {
  let component: ShowRouteInfoComponent;
  let fixture: ComponentFixture<ShowRouteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRouteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRouteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
