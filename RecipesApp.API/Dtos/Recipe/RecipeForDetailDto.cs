using System;
using System.Collections.Generic;

namespace RecipesApp.API.Dtos
{
    public class RecipeForDetailDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Ingredients { get; set; }
        public int PreparationTime { get; set; }
        public string Description { get; set; }
        public string PhotoUrl { get; set; }
        public int CategoryId { get; set; }
        public int AuthorId { get; set; }
        public DateTime DateAdded { get; set; }
        public ICollection<RecipePhotoForDetailDto> RecipePhotos {get; set;}
    }
}