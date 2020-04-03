namespace RecipesApp.API.Helpers.Sorting
{
    public class MessageParams : Params
    {
        public int UserId { get; set; } 
        public string MessageContainer { get; set; } = "Unread";
    }
} 