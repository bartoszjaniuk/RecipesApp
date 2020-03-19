using RecipesApp.API.Helpers.Sorting;

namespace RecipesApp.API.Helpers
{
     public class UserParams : Params
    {
        
        public int UserId { get; set; }
        public string Gender { get; set; }
        public int MinAge { get; set; } = 18;
        public int MaxAge { get; set; } = 99;
        public string OrderBy { get; set; }
        public bool Likees { get; set; } = false;
        public bool Likers { get; set; } = false;
        public bool Favs { get; set; } = false;
        
    }
}