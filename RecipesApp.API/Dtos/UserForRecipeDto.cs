using System.Collections.Generic;
using RecipesApp.API.Models;

namespace RecipesApp.API.Dtos
{
    public class UserForRecipeDto
    {
     public ICollection<RecipeForListDto> Recipes {get; set;} 
    }
}