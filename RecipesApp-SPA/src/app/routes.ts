import {Routes} from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { LikeListsComponent } from './lists/like-lists/like-lists.component';
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
import { AddRecipeComponent } from './recipes/recipes-list/add-recipe/add-recipe.component';
import { RecipeEditComponent } from './recipes/recipes-list/recipe-edit/recipe-edit.component';
import { RecipeEditResolver } from './_resolvers/recipe-edit-resolver';
import { ListsResolver } from './_resolvers/lists.resovler';
import { FavRecipeListsComponent } from './lists/like-lists/favRecipe-lists/favRecipe-lists.component';
import { FavRecipesResolver } from './_resolvers/fav-recipes-resolver';
import { MessagesResolver } from './_resolvers/messages-resolver';


export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
            {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            {path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver}},
            {path: 'member/edit', component: MemberEditComponent,
            resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
            {path: 'likes', component: LikeListsComponent, resolve: {users: ListsResolver}},
            {path: 'my-fav-recipes', component: FavRecipeListsComponent, resolve: {recipes: FavRecipesResolver}},
            {path: 'recipes', component: RecipesListComponent, resolve: {recipes: RecipeListResolver}},
            {path: 'recipes/:id', component: RecipeDetailComponent, resolve: {recipe: RecipeDetailResolver}},
            {path: 'recipe-add', component: AddRecipeComponent},
            {path: 'recipe/edit/:id', component: RecipeEditComponent, resolve: {recipe: RecipeEditResolver}},
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
