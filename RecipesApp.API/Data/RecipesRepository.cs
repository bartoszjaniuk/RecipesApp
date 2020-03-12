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


        public async Task<User> GetUser(int id)
        {
             var user = await _context.Users
             .Include(p => p.UserPhotos)
             .Include(r => r.Recipes)
                .ThenInclude(r => r.RecipePhotos)
             .FirstOrDefaultAsync(r => r.Id == id);
            return user;
        }


        public async Task<PagedList<User>> GetUsers(UserParams userParams)
        {
            var users =  _context.Users
            .Include(p => p.UserPhotos)
            .Include(r => r.Recipes).OrderByDescending(u => u.LastActive).AsQueryable();
            
            users = users.Where(u => u.Id != userParams.UserId);
            
            users = users.Where(u => u.Gender == userParams.Gender);

            if (userParams.MinAge != 18 || userParams.MaxAge != 99)
           {
               var minDateOfBirth = DateTime.Today.AddYears(-userParams.MaxAge - 1);
               var maxDateOfBirth = DateTime.Today.AddYears(-userParams.MinAge);

               users = users.Where(u => u.DateOfBirth >= minDateOfBirth && u.DateOfBirth <= maxDateOfBirth);
           }

            if(!string.IsNullOrEmpty(userParams.OrderBy))
            {
                switch(userParams.OrderBy)
                {
                    case "created":
                        users = users.OrderByDescending(u => u.Created);
                        break;
                        default:
                        users = users.OrderByDescending(u=> u.LastActive);
                        break;
                }
            }

            
            return await PagedList<User>.CreateAsync(users, userParams.PageNumber, userParams.PageSize);
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


        

         //.................... RECIPES........................................... //

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

        

        public async Task<bool> SaveAll()
        {
           return await _context.SaveChangesAsync() > 0;
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

        public async Task<FavouriteRecipe> AddToFav(int userId, int recipeId)
        {
            return await _context.FavouriteRecipes.FirstOrDefaultAsync(u => u.UserId == userId && u.RecipeId == recipeId);
        }

        public async Task<Like> GetLike(int userId, int recipientId)
        {
            return await _context.Likes.FirstOrDefaultAsync(u => u.LikerId == userId && u.LikeeId == recipientId);
        }

       
    }
    
}