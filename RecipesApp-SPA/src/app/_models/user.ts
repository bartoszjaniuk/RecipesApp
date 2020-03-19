import { UserPhoto } from './userPhoto';
import { Recipe } from './recipe';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    introduction?: string;
    userPhotos?: UserPhoto[];
    recipes?: Recipe[];
}
