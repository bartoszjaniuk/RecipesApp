using System;
using Microsoft.AspNetCore.Http;

namespace RecipesApp.API.Dtos
{
    public class PhotoForCreationDto
    {
        public string Url { get; set; }
        public IFormFile File { get; set; }
        // Reprezentuje plik przesłany za pomocą HTTP
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public string PublicId {get; set;}
        
        public PhotoForCreationDto()
        {
            DateAdded = DateTime.Now;
        }
    }
}