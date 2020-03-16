import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/_models/recipe';

@Component({

  // tslint:disable-next-line: component-selector
  selector: 'app-favRecipe-lists',
  templateUrl: './favRecipe-lists.component.html',
  styleUrls: ['./favRecipe-lists.component.css']
})
export class FavRecipeListsComponent implements OnInit {
  user: User;
  recipes: Recipe[];

  constructor(private authService: AuthService, private userService: UserService,
              private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadFavRecipes();
  }

  loadFavRecipes() {
    this.userService.getFavRecipes(this.authService.decodedToken.nameid)
    .subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    }, error => {
      this.alertify.error(error);
    });
  }



}
