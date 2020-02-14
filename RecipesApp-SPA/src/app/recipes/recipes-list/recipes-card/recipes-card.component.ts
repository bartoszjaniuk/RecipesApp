import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';

@Component({
  selector: 'app-recipes-card',
  templateUrl: './recipes-card.component.html',
  styleUrls: ['./recipes-card.component.css']
})
export class RecipesCardComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
