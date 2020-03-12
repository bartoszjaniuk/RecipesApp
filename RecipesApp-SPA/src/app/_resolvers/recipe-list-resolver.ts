import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';
import { RecipeService } from '../_services/recipe/recipe.service';
import { Recipe } from '../_models/recipe';


@Injectable()
export class RecipeListResolver implements Resolve<Recipe[]> {
    pageNumber = 1;
    pageSize = 9;
    constructor(private recipeService: RecipeService, private router: Router, private alertify: AlertifyService) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<Recipe[]> {
        return this.recipeService.getRecipes(this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
