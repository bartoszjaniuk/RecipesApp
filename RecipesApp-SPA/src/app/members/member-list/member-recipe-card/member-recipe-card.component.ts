import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Recipe } from 'src/app/_models/recipe';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-member-recipe-card',
  templateUrl: './member-recipe-card.component.html',
  styleUrls: ['./member-recipe-card.component.css']
})
export class MemberRecipeCardComponent implements OnInit {
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
