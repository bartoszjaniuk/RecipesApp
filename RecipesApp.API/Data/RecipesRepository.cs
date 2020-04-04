using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RecipesApp.API.Controllers.Models.Data;
using RecipesApp.API.Helpers;
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


          public async Task<bool> SaveAll()
        {
           return await _context.SaveChangesAsync() > 0;
        }
        

        public async Task<Recipe> GetRecipe(int id)
        {
            var recipe = await _context.Recipes
            .Include(p => p.RecipePhotos)
            .Include(u => u.User)
            .FirstOrDefaultAsync(r => r.Id == id);
            return recipe;
        }

        public async Task<PagedList<Recipe>> GetRecipes(RecipeParams recipeParams)
        {
            var recipes =  _context.Recipes
            .Include(p => p.RecipePhotos)
            .Include(u => u.User).AsQueryable();

            if(recipeParams.MinTime != 2 || recipeParams.MaxTime != 360)
            {
                recipes = recipes.Where(r => r.PreparationTime >= recipeParams.MinTime 
                && r.PreparationTime <= recipeParams.MaxTime);
            }
            
            return await PagedList<Recipe>.CreateAsync(recipes, recipeParams.PageNumber, recipeParams.PageSize);     
        }

    
          public async Task<Recipe> AddNewRecipe(Recipe recipe)
        {   
            await _context.Recipes.AddAsync(recipe);
            await _context.SaveChangesAsync();

            return recipe;
        }

        public async Task<bool> RecipeExists(string name)
        {
            if(await _context.Recipes.AnyAsync(r => r.Name == name))
                return true;

            return false;           
        }

        public async Task<RecipePhoto> GetRecipePhoto(int id)
        {
            var photo = await _context.RecipePhotos.FirstOrDefaultAsync(p => p.Id == id);

            return photo;
        }

        public async Task<RecipePhoto> GetMainPhotoForRecipe(int recipeId)
        {
            return await _context.RecipePhotos.Where(u => u.RecipeId == recipeId)
                .FirstOrDefaultAsync(p => p.IsMain);
        }

        public async Task<FavouriteRecipe> GetFav(int userId, int recipeId)
        {
            return await _context.FavouriteRecipes.FirstOrDefaultAsync(u => u.RecipeId == recipeId && u.UserId == userId);
        }

         public async Task<IEnumerable<Category>> GetCategories()
        {
           var categories = await _context.Categories.Include(p => p.Recipes).ToListAsync();

           return categories;

        }
    }
    
}