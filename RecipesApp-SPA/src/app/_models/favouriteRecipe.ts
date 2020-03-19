import { Recipe } from './recipe';
import { User } from './user';

export interface FavouriteRecipe {
    recipe: Recipe;
    recipeId: number;
    user: User;
    userId: number;
    
}
