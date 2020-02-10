import {Routes} from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { LikeListsComponent } from './like-lists/like-lists.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent},
            {path: 'messages', component: MessagesComponent},
            {path: 'lists', component: LikeListsComponent},
            {path: 'recipes', component: RecipesListComponent},
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
