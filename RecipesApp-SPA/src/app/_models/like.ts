import { User } from './user';

export interface Like {
  LikerId: number;  // user likes some1
  LikeeId: number; // user being like
  liker: User;
  likee: User;
}
