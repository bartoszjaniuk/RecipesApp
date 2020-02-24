namespace RecipesApp.API.Dtos
{
    public class RecipeForUpdateDto
    {
        public string Name { get; set; }
        
        public string Ingredients { get; set; }
        
        public int PreparationTime { get; set; }
        
        public string Description { get; set; }
    }
}