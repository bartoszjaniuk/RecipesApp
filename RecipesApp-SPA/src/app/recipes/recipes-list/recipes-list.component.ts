import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { RecipeService } from 'src/app/_services/recipe/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.recipes = data.recipes;
    });
  }

  // loadRecipes() {
  //   this.recipeService.getRecipes().subscribe((recipes: Recipe[]) => {
  //     this.recipes = recipes;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }


}
