namespace RecipesApp.API.Dtos
{
    public class RecipeForListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int PreparationTime { get; set; }
        public string PhotoUrl { get; set; }
        
    }
}