import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/_models/recipe';
import { FavouriteRecipe } from 'src/app/_models/favouriteRecipe';

@Component({

  // tslint:disable-next-line: component-selector
  selector: 'app-favRecipe-lists',
  templateUrl: './favRecipe-lists.component.html',
  styleUrls: ['./favRecipe-lists.component.css']
})
export class FavRecipeListsComponent implements OnInit {
  recipe: Recipe[];
  show: boolean;


  constructor(private authService: AuthService, private userService: UserService,
              private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.recipe = data.recipes;
    });
  }

  // loadFavRecipes() {
  //   this.userService.getFavRecipes(this.authService.decodedToken.nameid)
  //   .subscribe((recipes: Recipe[]) => {
  //     this.recipes = recipes;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }



}
