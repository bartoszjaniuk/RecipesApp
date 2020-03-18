import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-fav-recipe-card',
  templateUrl: './fav-recipe-card.component.html',
  styleUrls: ['./fav-recipe-card.component.css']
})
export class FavRecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private authService: AuthService, private userService: UserService,
              private alertify: AlertifyService) { }

ngOnInit() {
}

addToFav(id: number) {
this.userService.addToFav(this.authService.decodedToken.nameid, id).subscribe(data => {
this.alertify.success('Added to fav ' + this.recipe.name);
}, error => {
this.alertify.error(error);
});
}

}