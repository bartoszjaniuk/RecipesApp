import { UserPhoto } from './userPhoto';
import { Recipe } from './recipe';
import { Like } from './like';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: any;
    photoUrl: string;
    city: string;
    country: string;
    introduction?: string;
    userPhotos?: UserPhoto[];
    recipes?: Recipe[];
    likers?: Like[];
    likees?: Like[];
}
