using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using RecipesApp.API.Controllers.Models.Data;
using RecipesApp.API.Models;

namespace RecipesApp.API.Data
{
    public class SeedCategories
    {
        public static void Seed(DataContext context)
        {
            if(!context.Categories.Any())
            {
                var categoryData = System.IO.File.ReadAllText("Data/CategoriesSeedData.json");
                var categories = JsonConvert.DeserializeObject<List<Category>>(categoryData);
               foreach (var category in categories)
                {
                  context.Categories.Add(category);
                }
                context.SaveChanges();
            }
        }
    }
} 