import { RecipePhoto } from './recipePhoto';

export interface Recipe {
    id: number;
    name: string;
    ingredients: string;
    preparationTime: number;
    dateAdded: Date;
    photoUrl: string;
    description?: string;
    recipePhotos?: RecipePhoto[];
}


