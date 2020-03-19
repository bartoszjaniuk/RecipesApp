import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';
import { Recipe } from '../_models/recipe';
import { RecipeService } from '../_services/recipe/recipe.service';


@Injectable()
export class RecipeDetailResolver implements Resolve<Recipe> {

    constructor(private recipeService: RecipeService, private router: Router, private alertify: AlertifyService) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<Recipe> {
        return this.recipeService.getRecipe(route.params.id).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/recipes']);
                return of(null);
            })
        );
    }
}
