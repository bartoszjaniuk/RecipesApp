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
        private readonly IRecipesRepository _repository;
        private readonly IMapper _mapper;
        private readonly IUserRepository _userRepository;

        public UsersController(IRecipesRepository repository, IMapper mapper, IUserRepository userRepository)
        {
            _userRepository = userRepository;
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet] // Pobieranie wartości
        public async Task<IActionResult> GetUsers([FromQuery]UserParams userParams)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            //TUO
            
            var userFavs = await _userRepository.GetUserFavRecipes(currentUserId);
            
            var userFromRepo = await _repository.GetUser(currentUserId);

            userParams.UserId = currentUserId;

            if (string.IsNullOrEmpty(userParams.Gender))
            {
                userParams.Gender = userFromRepo.Gender == "male" ? "female" : "male";
            }

            var users = await _repository.GetUsers(userParams);

            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            Response.AddPagination(users.CurrentPage, users.PageSize, users.TotalCount, users.TotalPages);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}", Name = "GetUser")] // Pobieranie wartości
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repository.GetUser(id);

            var userToReturn = _mapper.Map<UserForDetailDto>(user);

            return Ok(userToReturn);
        }


        [HttpPut("{id}")] // Aktualizacja wartości
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            // tylko zalogowany użytkownik może edytować swój profil

            var userFromRepository = await _repository.GetUser(id);

            _mapper.Map(userForUpdateDto, userFromRepository);

            if (await _repository.SaveAll())
                return NoContent();

            throw new Exception($"Updating user {id} failed on save");

        }


        [HttpPost("{userId}/addNewRecipe")]
        public async Task<IActionResult> AddNewRecipe(int userId, [FromBody]RecipeForCreateDto recipeForCreateDto)
        {

            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _repository.GetUser(userId);

            recipeForCreateDto.Name = recipeForCreateDto.Name.ToLower();

            if (await _repository.RecipeExists(recipeForCreateDto.Name))
                return BadRequest("Recipe with that name already exists!");

            var recipeToCreate = _mapper.Map<Recipe>(recipeForCreateDto);

            recipeToCreate.UserId = userId;

            var createdRecipe = await _repository.AddNewRecipe(recipeToCreate);

            var recipeToReturn = _mapper.Map<RecipeForDetailDto>(createdRecipe);

            return CreatedAtRoute("GetUser", new { controller = "Users", userId = userId, id = createdRecipe.Id }, recipeToReturn);
        }


        [HttpPost("{userId}/addToFav/{recipeId}")]
        public async Task<IActionResult> AddRecipeToFav(int userId, int recipeId)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var like = await _repository.GetFav(userId, recipeId);

            if (like != null)
                return BadRequest("You allready like this recipe");

            if (await _repository.GetRecipe(recipeId) == null)
                return NotFound();

            like = new FavouriteRecipe
            {
                UserId = userId,
                RecipeId = recipeId
            };

            _repository.Add<FavouriteRecipe>(like);

            if (await _repository.SaveAll())
                return Ok();

            return BadRequest("Failed  to fav  recipe");
        }


        [HttpPost("{id}/like/{recipientId}")]
        public async Task<IActionResult> LikeUser(int id, int recipientId)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var like = await _repository.GetLike(id, recipientId);

            if (like != null)
                return BadRequest("You allready like this user <3");

            if (await _repository.GetUser(recipientId) == null)
                return NotFound();

            like = new Like
            {
                LikerId = id,
                LikeeId = recipientId
            };

            _repository.Add<Like>(like);

            if (await _repository.SaveAll())
                return Ok();

            return BadRequest("Failed  to like user");
        }


    }




}