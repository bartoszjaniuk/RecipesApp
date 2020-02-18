using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RecipesApp.API.Controllers.Models.Data;
using RecipesApp.API.Models;

namespace RecipesApp.API.Data
{
    public class RecipesRepository : IRecipesRepository
    {
        private readonly DataContext _context;

        public RecipesRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<UserPhoto> GetMainPhotoForUser(int userId)
        {
            return await _context.UserPhotos.Where(u => u.UserId == userId)
                .FirstOrDefaultAsync(p => p.IsMain);
        }

        public async Task<UserPhoto> GetPhoto(int id)
        {
            var photo = await _context.UserPhotos.FirstOrDefaultAsync(p => p.Id == id);

            return photo;
        }

        public async Task<Recipe> GetRecipe(int id)
        {
            var recipe = await _context.Recipes
            .Include(p => p.RecipePhotos)
            .Include(u => u.User)
            .FirstOrDefaultAsync(r => r.Id == id);
            return recipe;
        }

        public async Task<IEnumerable<Recipe>> GetRecipes()
        {
            var recipes = await _context.Recipes
            .Include(p => p.RecipePhotos)
            .Include(u => u.User)
            .ToListAsync();
            return recipes;
        }

        public async Task<User> GetUser(int id)
        {
             var user = await _context.Users
             .Include(p => p.UserPhotos)
             .Include(r => r.Recipes)
                .ThenInclude(r => r.RecipePhotos)
             .FirstOrDefaultAsync(r => r.Id == id);
            return user;
        }


        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users
            .Include(p => p.UserPhotos)
            .Include(r => r.Recipes)
            .ToListAsync();
            return users;
        }

        public async Task<bool> SaveAll()
        {
           return await _context.SaveChangesAsync() > 0;
        }
    }
}