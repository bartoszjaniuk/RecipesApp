using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RecipesApp.API.Data;
using RecipesApp.API.Dtos;

namespace RecipesApp.API.Controllers
{
    [Authorize]
    [Route("api/users/{userId}/recipes")]
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
   {
        private readonly IRecipesRepository _repository;
        private readonly IMapper _mapper;

        public RecipesController(IRecipesRepository repository, IMapper mapper) 
        {
            _repository = repository;
            _mapper = mapper;
        }
        
        [HttpGet] // Pobieranie wartości
        public async Task<IActionResult> GetRecipes ()
        {
            var recipes = await _repository.GetRecipes();

            var recipesToReturn = _mapper.Map<IEnumerable<RecipeForListDto>>(recipes);

            return Ok(recipesToReturn);
        }

        [Route("api/recipes/{id}")]
        [HttpGet("{id}")] // Pobieranie wartości
        public async Task<IActionResult> GetRecipe (int id)
        {
            var recipe = await _repository.GetRecipe(id);

            var recipeToReturn = _mapper.Map<RecipeForDetailDto>(recipe);

            return Ok(recipeToReturn);
        }

        // http://localhost:5000/api/users/{userId}/recipes/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipe(int userId, int id)
        {
    
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var recipeFromRepo = await _repository.GetRecipe(id);

            recipeFromRepo.UserId = userId;
            
            _repository.Delete(recipeFromRepo); 

            if (await _repository.SaveAll())
                return Ok();

            return BadRequest("Failed to delete the recipe");
        }



        [HttpPut("{id}")] // Aktualizacja wartości
        // http://localhost:5000/api/users/{userId}/recipes/{id}
        public async Task <IActionResult> UpdateRecipe (int userId, int id, RecipeForUpdateDto recipeForUpdateDto)
        {
      
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();
            // tylko zalogowany użytkownik może edytować swój profil

            var recipeFromRepo = await _repository.GetRecipe(id);

            _mapper.Map(recipeForUpdateDto, recipeFromRepo);

            if(await _repository.SaveAll())
                return NoContent();

            throw new Exception($"Updating recipe {id} failed on save");
            
        }
        
        
   }
}
