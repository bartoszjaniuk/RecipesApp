using System.Collections.Generic;

namespace RecipesApp.API.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Recipe> Recipes {get; set;}
    }
}