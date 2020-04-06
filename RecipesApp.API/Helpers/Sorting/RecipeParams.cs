using RecipesApp.API.Helpers.Sorting;

namespace RecipesApp.API.Helpers
{
    public class RecipeParams : Params
    {
        private int pageSize = 9;

        public string Category { get; set; }

        public int MinTime { get; set; } = 2;
        public int MaxTime { get; set; } = 360;

    }

}