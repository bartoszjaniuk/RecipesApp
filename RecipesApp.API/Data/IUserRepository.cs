using System.Collections.Generic;
using System.Threading.Tasks;
using RecipesApp.API.Models;

namespace RecipesApp.API.Data
{
    public interface IUserRepository
    {
         Task <List<Recipe>> GetUserFavRecipes(int userId);
    }
}