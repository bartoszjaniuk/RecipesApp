using Microsoft.EntityFrameworkCore;

namespace RecipesApp.API.Controllers.Models.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
        
            public DbSet<Value> Values {get; set;}
        
    }
}