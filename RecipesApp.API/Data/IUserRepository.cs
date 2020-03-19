using System.Collections.Generic;
using System.Threading.Tasks;
using RecipesApp.API.Helpers;
using RecipesApp.API.Helpers.Sorting;
using RecipesApp.API.Models;

namespace RecipesApp.API.Data
{
    public interface IUserRepository : IAppRepository
    {
         
         Task<PagedList<User>> GetUsers(UserParams userParams); 
         Task<User> GetUser(int id);

         Task<UserPhoto> GetPhoto(int id);
         Task<UserPhoto> GetMainPhotoForUser(int userId);

         Task<Like> GetLike(int userId, int recipientId);
         Task <List<Recipe>> GetUserFavRecipes(int userId);

         Task<Message> GetMessage(int id);
         Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams);
         Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId);

    }
}