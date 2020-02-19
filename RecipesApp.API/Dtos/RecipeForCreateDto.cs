using System;
using System.ComponentModel.DataAnnotations;

namespace RecipesApp.API.Dtos
{
    public class RecipeForCreateDto
    {
        [Required]
        [StringLength(8, MinimumLength = 3, ErrorMessage ="You must specify password between 3 and 12 characters")]
        public string Name { get; set; }
        
        [Required]
        public string Ingredients { get; set; }
        
        [Required]
        public int PreparationTime { get; set; }
        
        [Required]
        public string Description { get; set; }
        
        public DateTime DateAdded { get; set; }
        public int UserId { get; set; }


        public RecipeForCreateDto()
        {
            DateAdded = DateTime.Now;
        }

    }

}