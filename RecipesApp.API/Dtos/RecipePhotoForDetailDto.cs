using System;
using System.Collections.Generic;
using RecipesApp.API.Models;

namespace RecipesApp.API.Dtos
{
    public class RecipePhotoForDetailDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
        public ICollection<RecipePhoto> RecipePhotos {get; set;}
    }
}