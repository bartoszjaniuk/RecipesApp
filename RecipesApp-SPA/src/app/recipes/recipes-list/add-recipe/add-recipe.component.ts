import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/_models/recipe';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router} from '@angular/router';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { RecipeService } from 'src/app/_services/recipe/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  user: User;
  recipe: Recipe;
  addRecipeForm: FormGroup;
  constructor(private fb: FormBuilder,
              private alertifyService: AlertifyService,
              private router: Router,
              private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit() {
    this.createRecipeForm();
  }


  createRecipeForm() {
    this.addRecipeForm = this.fb.group({
      name: ['', Validators.required],
      ingredients: ['', Validators.required],
      preparationTime: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  createRecipe(id: number) {
    if (this.addRecipeForm.valid) {
      this.recipe = Object.assign({}, this.addRecipeForm.value);
      this.recipeService.addNewRecipe(this.authService.currentUser.id, this.recipe).subscribe(() => {
        this.alertifyService.success('New recipe has been added!');
      }, error => {
        this.alertifyService.error(error);
      }, () => {
          this.router.navigate(['/recipes']);
        });
    }
  }


  cancel() {
    this.router.navigate(['members']);
    this.alertifyService.warning('Cancelled');
  }

}
