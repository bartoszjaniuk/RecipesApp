import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Recipe } from 'src/app/_models/recipe';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }


getRecipes(): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.baseUrl + 'recipes', httpOptions);
}

getRecipe(id: number): Observable<Recipe> {
  return this.http.get<Recipe>(this.baseUrl + 'recipes/' + id, httpOptions);
}

addNewRecipe(userId: number, recipe: Recipe) {
  return this.http.post(this.baseUrl + 'users/' + userId + '/addNewRecipe', recipe);
}

}
