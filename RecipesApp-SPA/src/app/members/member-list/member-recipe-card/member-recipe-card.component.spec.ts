/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MemberRecipeCardComponent } from './member-recipe-card.component';

describe('MemberRecipeCardComponent', () => {
  let component: MemberRecipeCardComponent;
  let fixture: ComponentFixture<MemberRecipeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberRecipeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberRecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
