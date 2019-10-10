import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCurrentUsersComponent } from './show-current-users.component';

describe('ShowCurrentUsersComponent', () => {
  let component: ShowCurrentUsersComponent;
  let fixture: ComponentFixture<ShowCurrentUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCurrentUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCurrentUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
