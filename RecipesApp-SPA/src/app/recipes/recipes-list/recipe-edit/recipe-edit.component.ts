import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/_services/recipe/recipe.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { RecipePhoto } from 'src/app/_models/recipePhoto';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  @ViewChild('editForm', {static: true}) editForm: NgForm;
  recipe: Recipe;
  photos: RecipePhoto[] = [];
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  currentMain: RecipePhoto;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private authService: AuthService,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.recipe = data.recipe;
    });
    this.initializeUploader();
  }


  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/recipes/' + this.recipe.id + '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });



    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };


    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: RecipePhoto = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain
        };
        this.photos.push(photo);
        this.recipe.recipePhotos.push(photo);

        if (photo.isMain) {
          this.recipeService.changeRecipePhoto(photo.url);
          this.recipeService.currentRecipe.photoUrl = photo.url;
          this.recipe = this.recipeService.currentRecipe;
        }
      }
    };
  }


  updateRecipe(id: number) {
    this.recipeService.editRecipe(this.authService.decodedToken.nameid, id, this.recipe).subscribe(next => {
      this.alertify.success('Recipe updated successfully');
      this.editForm.reset(this.recipe);
    }, error => {
      this.alertify.error(error);
    });
  }

  setMainPhoto(photo: RecipePhoto) {
    this.recipeService.setMainPhoto(this.authService.decodedToken.nameid, this.recipe.id, photo.id)
    .subscribe(() => {
    this.currentMain = this.recipe.recipePhotos.filter(p => p.isMain === true)[0];
    if (this.currentMain) {
      this.currentMain.isMain = false;
      photo.isMain = true;
      this.alertify.success('Succesfully changed main photo');
    }
    // this.recipeService.changeRecipePhoto(photo.url);
    // this.recipeService.currentRecipe.photoUrl = photo.url;
    // this.recipe = this.recipeService.currentRecipe;
  }, error => {
    this.alertify.error(error);
  });
}

  deletePhoto(id: number) {
    this.alertify.confirm('Are you sure you want to delete this photo?', () => {
      this.recipeService.deletePhoto(this.authService.decodedToken.nameid, this.recipe.id, id).subscribe(() => {
        this.recipe.recipePhotos.splice(this.recipe.recipePhotos.findIndex(p => p.id === id), 1);
        this.alertify.success('Photo has been deleted');
      }, error => {
        this.alertify.error('Failed to delete the photo');
      });
    });
  }




}
