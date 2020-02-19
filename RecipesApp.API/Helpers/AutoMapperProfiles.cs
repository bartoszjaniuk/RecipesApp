using System.Linq;
using AutoMapper;
using RecipesApp.API.Dtos;
using RecipesApp.API.Models;

namespace RecipesApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
           CreateMap<User, UserForListDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt
                .MapFrom(src => src.UserPhotos
                    .FirstOrDefault(p => p.IsMain).Url))
            .ForMember(dest => dest.Age, opt => opt
                .MapFrom(src => src.DateOfBirth
                    .CalculateAge()));

           CreateMap<User, UserForDetailDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt
                .MapFrom(src => src.UserPhotos
                    .FirstOrDefault(p => p.IsMain).Url))
            .ForMember(dest => dest.Age, opt => opt
                .MapFrom(src => src.DateOfBirth
                    .CalculateAge()));

           CreateMap<UserPhoto, UserPhotoForDetailDto>();


           //_______________________________________________


           CreateMap<Recipe, RecipeForListDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt
                .MapFrom(src => src.RecipePhotos
                    .FirstOrDefault(p => p.IsMain).Url));

           CreateMap<Recipe, RecipeForDetailDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt
                .MapFrom(src => src.RecipePhotos
                    .FirstOrDefault(p => p.IsMain).Url));

           CreateMap<RecipePhoto, RecipePhotoForDetailDto>();  
           CreateMap<UserForUpdateDto, User>();  

           CreateMap<UserPhoto, PhotoForReturnDto>();  
           CreateMap<PhotoForCreationDto, UserPhoto>();  

           CreateMap<User, UserForRecipeDto>();


           CreateMap<UserForRegisterDto, User>();

           CreateMap<Recipe, RecipeForDetailDto>();
           CreateMap<RecipeForCreateDto, Recipe>();


              
            


           

           
           
        }
    }   
}