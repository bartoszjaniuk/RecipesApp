import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { RecipeService } from 'src/app/_services/recipe/recipe.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.css']
})
export class RecipeEditorComponent implements OnInit {
  @Input() recipes: Recipe[];
  constructor(private alertify: AlertifyService, private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit() {
  }


  deleteRecipe(id: number) {
    this.alertify.confirm('Are you sure you want to delete this recipe?', () => {
      this.recipeService.deleteRecipe(this.authService.decodedToken.nameid, id).subscribe(() => {
        this.recipes.splice(this.recipes.findIndex(p => p.id === id), 1);
        this.alertify.success('Recipe has been deleted');
      }, error => {
        this.alertify.error('Failed to delete the recipe');
      });
    });
  }

}
