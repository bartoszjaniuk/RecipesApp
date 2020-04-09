import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/_models/recipe';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router} from '@angular/router';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { RecipeService } from 'src/app/_services/recipe/recipe.service';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  categories: Category[];
  user: User;
  recipe: Recipe;
  addRecipeForm: FormGroup;
  constructor(private fb: FormBuilder,
              private alertifyService: AlertifyService,
              private router: Router,
              private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit() {
    this.createRecipeForm();
    this.getCategories();
  }


  createRecipeForm() {
    this.addRecipeForm = this.fb.group({
      name: ['', Validators.required],
      ingredients: ['', Validators.required],
      preparationTime: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }


  createRecipe(id: number) {
    if (this.addRecipeForm.valid) {
      this.recipe = Object.assign({}, this.addRecipeForm.value);
      this.recipeService.addNewRecipe(this.authService.currentUser.id, this.recipe)
     .subscribe((result : any) => {
        this.alertifyService.success('New recipe has been added!');
        // tslint:disable-next-line: no-shadowed-variable
        const id = result.id;
        this.router.navigate([`/recipe/edit/${id}`]);
      }, error => {
        this.alertifyService.error(error);
      }); 

    }
  }


  cancel() {
    this.router.navigate(['members']);
    this.alertifyService.warning('Cancelled');
  }

  getCategories() {
    this.recipeService.getCategories().subscribe(response => {
      this.categories = response;
    }, error => {
      this.alertifyService.error(error);
    });
  }

}
