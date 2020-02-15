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
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IRecipesRepository _repository;
        private readonly IMapper _mapper;

        public UsersController(IRecipesRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet] // Pobieranie wartości
        public async Task<IActionResult> GetUsers ()
        {
            var users = await _repository.GetUsers();

            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}")] // Pobieranie wartości
        public async Task<IActionResult> GetUser (int id)
        {
            var user = await _repository.GetUser(id);

            var userToReturn = _mapper.Map<UserForDetailDto>(user);

            return Ok(userToReturn);
        }


        [HttpPut("{id}")] // Aktualizacja wartości
        public async Task <IActionResult> UpdateUser (int id, UserForUpdateDto userForUpdateDto)
        {
            if(id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            // tylko zalogowany użytkownik może edytować swój profil

            var userFromRepository = await _repository.GetUser(id);

            _mapper.Map(userForUpdateDto, userFromRepository);

            if( await _repository.SaveAll())
                return NoContent();

            throw new Exception($"Updating user {id} failed on save");
            
        }

    }
}