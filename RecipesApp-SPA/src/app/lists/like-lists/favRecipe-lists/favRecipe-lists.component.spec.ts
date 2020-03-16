/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavRecipeListsComponent } from './favRecipe-lists.component';

describe('FavRecipeListsComponent', () => {
  let component: FavRecipeListsComponent;
  let fixture: ComponentFixture<FavRecipeListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavRecipeListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavRecipeListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
