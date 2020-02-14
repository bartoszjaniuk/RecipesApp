import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';
import { RecipeService } from '../_services/recipe/recipe.service';
import { Recipe } from '../_models/recipe';


@Injectable()
export class RecipeListResolver implements Resolve<Recipe[]> {

    constructor(private recipeService: RecipeService, private router: Router, private alertify: AlertifyService) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<Recipe[]> {
        return this.recipeService.getRecipes().pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
