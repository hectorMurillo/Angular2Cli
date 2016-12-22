/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MdformComponent } from './mdform.component';

describe('MdformComponent', () => {
  let component: MdformComponent;
  let fixture: ComponentFixture<MdformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
