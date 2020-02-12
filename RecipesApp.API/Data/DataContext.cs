using Microsoft.EntityFrameworkCore;
using RecipesApp.API.Models;

namespace RecipesApp.API.Controllers.Models.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
        
            public DbSet<Value> Values {get; set;}
            public DbSet<User> Users {get; set;}
            public DbSet<UserPhoto> UserPhotos {get; set;}
            public DbSet<Recipe> Recipes {get; set;}
            public DbSet<RecipePhoto> RecipePhotos {get; set;}

        
    }
}