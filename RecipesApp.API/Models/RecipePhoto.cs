using System;

namespace RecipesApp.API.Models
{
    public class RecipePhoto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
        public Recipe Recipe { get; set; }
        public int RecipeId { get; set; }

    }
}