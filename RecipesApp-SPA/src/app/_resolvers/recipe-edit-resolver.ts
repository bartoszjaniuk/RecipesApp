import {Injectable} from '@angular/core';
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { RecipeService } from '../_services/recipe/recipe.service';
import { Recipe } from '../_models/recipe';


@Injectable()
export class RecipeEditResolver implements Resolve<Recipe> {

    constructor(private recipeService: RecipeService, private router: Router, private alertify: AlertifyService,
                private authService: AuthService) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<Recipe> {
        return this.recipeService.getRecipe(route.params.id).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
