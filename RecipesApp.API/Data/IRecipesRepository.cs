using System.Collections.Generic;
using System.Threading.Tasks;
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
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
         Task<IEnumerable<Recipe>> GetRecipes();
         Task<Recipe> GetRecipe(int id);
         Task<UserPhoto> GetPhoto(int id);
         Task<UserPhoto> GetMainPhotoForUser(int userId);

         Task<Recipe> AddNewRecipe(Recipe recipe);
         Task<bool> RecipeExists(string name);

    }
}
