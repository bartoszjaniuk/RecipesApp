using System;
using System.ComponentModel.DataAnnotations;

namespace RecipesApp.API.Dtos
{
    public class RecipeForCreateDto
    {
        [Required]
        [StringLength(15, MinimumLength = 3, ErrorMessage ="You must specify name between 3 and 15 characters")]
        public string Name { get; set; }
        
        [Required]
        public string Ingredients { get; set; }
        
        [Required]
        public int PreparationTime { get; set; }
        
        [Required]
        public string Description { get; set; }

        [Required]
        public int CategoryId { get; set; }
        
        public DateTime DateAdded { get; set; }
        public int UserId { get; set; }
        public int AuthorId { get; set; }


        public RecipeForCreateDto()
        {
            DateAdded = DateTime.Now;
        }

    }

}