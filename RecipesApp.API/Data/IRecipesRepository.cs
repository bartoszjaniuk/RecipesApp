using System.Collections.Generic;
using System.Threading.Tasks;
using RecipesApp.API.Helpers;
using RecipesApp.API.Models;

namespace RecipesApp.API.Data
{
    public interface IRecipesRepository
    {
         
         /* 
         Metoda void T = TYP w moim przypadku klasa User
         przyjmuje parametr (Typ encji) 
         WHERE T - określa TYP wymuszenia w naszym przypadku tylko dla klas
         Metoda typu Generic. Zamiast pisać kilku metod można napisać jedną generyczną w której wystarczy określić typ.
         */
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();

         // USERS //
         Task<PagedList<User>> GetUsers(UserParams userParams);
         Task<User> GetUser(int id);

         Task<UserPhoto> GetPhoto(int id);
         Task<UserPhoto> GetMainPhotoForUser(int userId);

         Task<Like> GetLike(int userId, int recipientId);

         // RECIPES //
         Task<PagedList<Recipe>> GetRecipes(RecipeParams recipeParams);
         Task<Recipe> GetRecipe(int id);
         Task<Recipe> AddNewRecipe(Recipe recipe);
         
         Task<bool> RecipeExists(string name);

         Task<FavouriteRecipe> AddToFav(int userId, int recipeId);
         // lepiej GetFav

         Task<RecipePhoto> GetRecipePhoto(int id);
         Task<RecipePhoto> GetMainPhotoForRecipe(int recipeId);

    }
}
