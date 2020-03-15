using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RecipesApp.API.Controllers.Models.Data;
using RecipesApp.API.Models;

namespace RecipesApp.API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;

        }
        public Task<List<Recipe>> GetUserFavRecipes(int userId)
        {
            //Dla usera o id 1 pobrało mi jakieś dwa przepisy - nie wiem czy to się zgadza czy nie, ale to sprawdzisz samemu najlepiej
            var userFavRecipes = _context.FavouriteRecipes
            .Include(x => x.Recipe)
            .Where(x => x.UserId == userId)
            .Select(x => x.Recipe)?.ToListAsync();

            return userFavRecipes;
        }
    }
}