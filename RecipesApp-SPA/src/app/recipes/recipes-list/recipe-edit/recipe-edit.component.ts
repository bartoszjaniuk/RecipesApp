import { Component, OnInit, ViewChild } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { RecipeService } from 'src/app/_services/recipe/recipe.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  @ViewChild('editForm', {static: true}) editForm: NgForm;
  recipe: Recipe;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private authService: AuthService,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.recipe = data.recipe;
    });
  }



  updateRecipe(id: number) {
    this.recipeService.editRecipe(this.authService.decodedToken.nameid, id, this.recipe).subscribe(next => {
      this.alertify.success('Recipe updated successfully');
      this.editForm.reset(this.recipe);
    }, error => {
      this.alertify.error(error);
    });
  }

}
