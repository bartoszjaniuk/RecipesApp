import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { Recipe } from '../_models/recipe';
import { AuthService } from '../_services/auth.service';


@Injectable()
export class FavRecipesResolver implements Resolve<Recipe[]> {

    constructor(private userService: UserService, 
                private router: Router, private alertify: AlertifyService, private authService: AuthService) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<Recipe[]> {
        
        return this.userService.getFavRecipes(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
            
        );
    }
}

