using System;
using System.Collections.Generic;

namespace RecipesApp.API.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public  string Ingredients { get; set; }
        public int PreparationTime { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public ICollection<RecipePhoto> RecipePhotos {get; set;}
        public User User { get; set; }
        public int UserId { get; set; }
        public Category Categories { get; set; }
        public int CategoryId { get; set; }
    }
}