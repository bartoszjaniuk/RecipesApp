using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RecipesApp.API.Data;
using RecipesApp.API.Dtos;
using RecipesApp.API.Helpers;
using RecipesApp.API.Models;

namespace RecipesApp.API.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IRecipesRepository _recipesRepository;
        private readonly IMapper _mapper;
        private readonly IUserRepository _userRepository;

        public UsersController(IRecipesRepository recipesRepository, IMapper mapper, IUserRepository userRepository)
        {
            _userRepository = userRepository;
            _recipesRepository = recipesRepository;
            _mapper = mapper;
        }

        [HttpGet] // Pobieranie wartości
        public async Task<IActionResult> GetUsers([FromQuery]UserParams userParams)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            //TUO
            
            var userFavs = await _userRepository.GetUserFavRecipes(currentUserId);
            
            var userFromRepo = await _userRepository.GetUser(currentUserId);

            userParams.UserId = currentUserId;

            if (string.IsNullOrEmpty(userParams.Gender))
            {
                userParams.Gender = userFromRepo.Gender == "male" ? "female" : "male";
            }

            var users = await _userRepository.GetUsers(userParams);

            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            Response.AddPagination(users.CurrentPage, users.PageSize, users.TotalCount, users.TotalPages);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}", Name = "GetUser")] // Pobieranie wartości
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _userRepository.GetUser(id);

            var userToReturn = _mapper.Map<UserForDetailDto>(user);

            return Ok(userToReturn);
        }


        [HttpPut("{id}")] // Aktualizacja wartości
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            // tylko zalogowany użytkownik może edytować swój profil

            var userFromRepository = await _userRepository.GetUser(id);

            _mapper.Map(userForUpdateDto, userFromRepository);

            if (await _recipesRepository.SaveAll())
                return NoContent();

            throw new Exception($"Updating user {id} failed on save");

        }


        [HttpPost("{userId}/addNewRecipe")]
        public async Task<IActionResult> AddNewRecipe(int userId, [FromBody]RecipeForCreateDto recipeForCreateDto)
        {

            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _userRepository.GetUser(userId);

            recipeForCreateDto.Name = recipeForCreateDto.Name.ToLower();

            if (await _recipesRepository.RecipeExists(recipeForCreateDto.Name))
                return BadRequest("Recipe with that name already exists!");

            var recipeToCreate = _mapper.Map<Recipe>(recipeForCreateDto);

            recipeToCreate.UserId = userId;

            var createdRecipe = await _recipesRepository.AddNewRecipe(recipeToCreate);

            var recipeToReturn = _mapper.Map<RecipeForDetailDto>(createdRecipe);

            return CreatedAtRoute("GetUser", new { controller = "Users", userId = userId, id = createdRecipe.Id }, recipeToReturn);
        }


        [HttpPost("{userId}/addToFav/{recipeId}")]
        public async Task<IActionResult> AddRecipeToFav(int userId, int recipeId)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var like = await _recipesRepository.GetFav(userId, recipeId);

            if (like != null)
                return BadRequest("You allready like this recipe");

            if (await _recipesRepository.GetRecipe(recipeId) == null)
                return NotFound();

            like = new FavouriteRecipe
            {
                UserId = userId,
                RecipeId = recipeId
            };

            _recipesRepository.Add<FavouriteRecipe>(like);

            if (await _recipesRepository.SaveAll())
                return Ok();

            return BadRequest("Failed  to fav  recipe");
        }


        [HttpPost("{id}/like/{recipientId}")]
        public async Task<IActionResult> LikeUser(int id, int recipientId)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var like = await _userRepository.GetLike(id, recipientId);

            if (like != null)
                return BadRequest("You allready like this user <3");

            if (await _userRepository.GetUser(recipientId) == null)
                return NotFound();

            like = new Like
            {
                LikerId = id,
                LikeeId = recipientId
            };

            _recipesRepository.Add<Like>(like);

            if (await _recipesRepository.SaveAll())
                return Ok();

            return BadRequest("Failed  to like user");
        }


    }




}