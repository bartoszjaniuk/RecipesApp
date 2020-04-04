import { Recipe } from './recipe';


export interface Category {
    id: number;
    name: string;
    recipes?: Recipe[];
}
