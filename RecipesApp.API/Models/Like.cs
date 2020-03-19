namespace RecipesApp.API.Models
{
    public class Like
    {
        public int LikerId { get; set; } // user likes some1
        public int LikeeId { get; set; } // user being like
        public User Liker {get; set;}
        public User Likee {get; set;}
    }
}