/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavRecipeCardComponent } from './fav-recipe-card.component';

describe('FavRecipeCardComponent', () => {
  let component: FavRecipeCardComponent;
  let fixture: ComponentFixture<FavRecipeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavRecipeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavRecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
