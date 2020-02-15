import {Routes} from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { LikeListsComponent } from './like-lists/like-lists.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-list/member-detail/member-detail.component';
import { RecipeDetailComponent } from './recipes/recipes-list/recipe-detail/recipe-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail-resolver';
import { RecipeDetailResolver } from './_resolvers/recipe-detail-resolver';
import { MemberListResolver } from './_resolvers/member-list-resolver';
import { RecipeListResolver } from './_resolvers/recipe-list-resolver';
import { MemberEditComponent } from './members/member-list/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit-resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
            {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            {path: 'messages', component: MessagesComponent},
            {path: 'member/edit', component: MemberEditComponent,
            resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
            {path: 'lists', component: LikeListsComponent},
            {path: 'recipes', component: RecipesListComponent, resolve: {recipes: RecipeListResolver}},
            {path: 'recipes/:id', component: RecipeDetailComponent, resolve: {recipe: RecipeDetailResolver}},
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
