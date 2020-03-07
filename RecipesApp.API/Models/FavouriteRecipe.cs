using System;

namespace RecipesApp.API.Models
{
    public class FavouriteRecipe
    {
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public DateTime DateLiked { get; set; }

        public FavouriteRecipe()
        {
            DateLiked = DateTime.Now;
        }


    }
}