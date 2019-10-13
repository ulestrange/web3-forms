import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form3ModalComponent } from './form3-modal.component';

describe('Form3ModalComponent', () => {
  let component: Form3ModalComponent;
  let fixture: ComponentFixture<Form3ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form3ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form3ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
