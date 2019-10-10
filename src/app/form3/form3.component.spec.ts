import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form3Component } from './form3.component';

import {BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';



import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

describe('Form3Component', () => {
  let component: Form3Component;
  let fixture: ComponentFixture<Form3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
