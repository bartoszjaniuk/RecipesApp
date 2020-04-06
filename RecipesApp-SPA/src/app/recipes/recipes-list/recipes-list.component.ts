import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { RecipeService } from 'src/app/_services/recipe/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  recipe: Recipe;
  categories: Category[];
  recipeParams: any = {};
  pagination: Pagination;


  constructor(private recipeService: RecipeService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.recipes = data.recipes.result;
      this.getCategories();
      this.pagination = data.recipes.pagination;
    });
    this.recipeParams.minTime = 2;
    this.recipeParams.maxTime = 360;
    this.recipeParams.category = '';
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadRecipes();
    this.getCategories();
    console.log(this.pagination.currentPage);
  }


  resetFilters() {
    this.recipeParams.minTime = 2;
    this.recipeParams.maxTime = 360;
    this.recipeParams.category = '';
    this.loadRecipes();
    this.getCategories();
  }

  loadRecipes() {
    this.recipeService.getRecipes(this.pagination.currentPage,
      this.pagination.itemsPerPage, this.recipeParams ).subscribe((res: PaginatedResult<Recipe[]>) => {
      this.recipes = res.result;
      this.pagination = res.pagination;
    }, error => {
      this.alertify.error(error);
    });
  }
  getCategories() {
    this.recipeService.getCategories().subscribe(response => {
      this.categories = response;
    }, error => {
      this.alertify.error(error);
    });
  }


}
