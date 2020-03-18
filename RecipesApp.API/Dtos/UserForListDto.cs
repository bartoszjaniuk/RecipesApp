using System;
using System.Collections.Generic;
using RecipesApp.API.Dtos.Recipe;
using RecipesApp.API.Models;

namespace RecipesApp.API.Dtos
{
    public class UserForListDto
    {
        //Wysyłamy zapytanie do db i 
        //zwracamy wartości tlyko te które są nam potrzebne.
        public int Id { get; set; }
        public string Username { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created {get; set;}
        public DateTime LastActive {get; set;}
        public string City { get; set; }
        public string Country { get; set; }
        public string PhotoUrl { get; set; }
        public List<FavouriteRecipeToReturn> FavouriteRecipes {get; set;}
        //Aby wyświetlić main photo
    }
}