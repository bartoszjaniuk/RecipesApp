using System.Collections.Generic;
using System.Threading.Tasks;
using RecipesApp.API.Helpers;
using RecipesApp.API.Models;

namespace RecipesApp.API.Data
{
    public interface IRecipesRepository : IAppRepository
    {
         
         /* 
         Metoda void T = TYP w moim przypadku klasa User
         przyjmuje parametr (Typ encji) 
         WHERE T - określa TYP wymuszenia w naszym przypadku tylko dla klas
         Metoda typu Generic. Zamiast pisać kilku metod można napisać jedną generyczną w której wystarczy określić typ.
         */
       
    
         // RECIPES //
         Task<PagedList<Recipe>> GetRecipes(RecipeParams recipeParams);
         Task<Recipe> GetRecipe(int id);
         Task<Recipe> AddNewRecipe(Recipe recipe);
         
         Task<bool> RecipeExists(string name);

         Task<FavouriteRecipe> GetFav(int userId, int recipeId);
         // lepiej GetFav

         Task<RecipePhoto> GetRecipePhoto(int id);
         Task<RecipePhoto> GetMainPhotoForRecipe(int recipeId);
         Task<IEnumerable<Category>> GetCategories();
    }
}
