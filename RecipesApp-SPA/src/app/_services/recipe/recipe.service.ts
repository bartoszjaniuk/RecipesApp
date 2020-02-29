import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Recipe } from 'src/app/_models/recipe';
import { Observable, BehaviorSubject } from 'rxjs';



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


getRecipes(): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.baseUrl + 'recipes', httpOptions);
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

}
