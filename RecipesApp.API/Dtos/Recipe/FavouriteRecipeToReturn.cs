

namespace RecipesApp.API.Dtos.Recipe
{
    public class FavouriteRecipeToReturn
    {
        public int RecipeId { get; set; }
        public RecipeForListDto Recipe { get; set; }
        public int UserId { get; set; }
        public UserForListDto User { get; set; }
    }
}