import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Recipe } from 'src/app/_models/recipe';
import { Observable, BehaviorSubject } from 'rxjs';
import { PaginatedResult } from 'src/app/_models/pagination';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/_models/category';



const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  currentRecipe: Recipe;
  photoUrl = new BehaviorSubject<string> ('../../assets/image.png');
  currentPhotoUrl = this.photoUrl.asObservable();
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

changeRecipePhoto(photoUrl: string) {
  this.photoUrl.next(photoUrl);
}


getRecipes(page?, itemsPerPage?, recipeParams?): Observable<PaginatedResult<Recipe[]>> {
  const paginatedResult: PaginatedResult<Recipe[]> = new PaginatedResult<Recipe[]>();

  let params = new HttpParams();

  if (page != null && itemsPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPage);
  }
  if (recipeParams != null) {
    params = params.append('minTime', recipeParams.minTime);
    params = params.append('maxTime', recipeParams.maxTime);
    // params = params.append('orderBy', recipeParams.orderBy);
  }

  return this.http.get<Recipe[]>(this.baseUrl + 'recipes',  {observe: 'response', params})
  .pipe(
    map(repsonse => {
      paginatedResult.result = repsonse.body;
      if (repsonse.headers.get('Pagination') != null) {
        paginatedResult.pagination = JSON.parse(repsonse.headers.get('Pagination'));
      }
      return paginatedResult;
    })
  );
}

getRecipe(id: number): Observable<Recipe> {
  return this.http.get<Recipe>(this.baseUrl + 'recipes/' + id, httpOptions);
}

addNewRecipe(userId: number, recipe: Recipe) {
  return this.http.post(this.baseUrl + 'users/' + userId + '/addNewRecipe', recipe);
}

deleteRecipe(userId: number, id: number) {
  return this.http.delete(this.baseUrl + 'users/' + userId + '/recipes/' + id);
}

editRecipe(userId: number, id: number, recipe: Recipe) {
  return this.http.put(this.baseUrl + 'users/' + userId + '/recipes/' + id, recipe);
}

// http://localhost:5000/api/users/1/recipes/1/photos/17
deletePhoto(userId: number, recipeId: number, id: number) {
  return this.http.delete(this.baseUrl + 'users/' + userId + '/recipes/' + recipeId + '/photos/' + id);
}


// http://localhost:5000/api/users/1/recipes/1/photos/16/setMain
setMainPhoto(userId: number, recipeId: number, id: number) {
  return this.http.post(this.baseUrl + 'users/' + userId + '/recipes/' + recipeId + '/photos/' + id + '/setMain', {});
}
getCategories(): Observable<Category[]> {
  return this.http.get<Category[]>(this.baseUrl + 'recipes' + '/categories');
}

}
