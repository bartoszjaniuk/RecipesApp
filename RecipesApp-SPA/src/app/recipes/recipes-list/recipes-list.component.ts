import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { RecipeService } from 'src/app/_services/recipe/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  recipeParams: any = {};
  pagination: Pagination;

  constructor(private recipeService: RecipeService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.recipes = data.recipes.result;
      this.pagination = data.recipes.pagination;
    });
    this.recipeParams.minTime = 2;
    this.recipeParams.maxTime = 360;
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadRecipes();
    console.log(this.pagination.currentPage);
  }


  resetFilters() {
    this.recipeParams.minTime = 2;
    this.recipeParams.maxTime = 360;
    this.loadRecipes();
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


}
