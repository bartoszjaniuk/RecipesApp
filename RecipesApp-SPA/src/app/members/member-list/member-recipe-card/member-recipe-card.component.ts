import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Recipe } from 'src/app/_models/recipe';

@Component({
  selector: 'app-member-recipe-card',
  templateUrl: './member-recipe-card.component.html',
  styleUrls: ['./member-recipe-card.component.css']
})
export class MemberRecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
