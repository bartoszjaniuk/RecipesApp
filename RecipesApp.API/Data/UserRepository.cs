using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RecipesApp.API.Controllers.Models.Data;
using RecipesApp.API.Helpers;
using RecipesApp.API.Helpers.Sorting;
using RecipesApp.API.Models;

namespace RecipesApp.API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;

        }

           public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }


          public async Task<bool> SaveAll()
        {
           return await _context.SaveChangesAsync() > 0;
        }

        public async Task<User> GetUser(int id)
        {
             var user = await _context.Users
             .Include(p => p.UserPhotos)
             .Include(r => r.Recipes)
                .ThenInclude(r => r.RecipePhotos)
            .Include(f=>f .FavRecipes)
             .FirstOrDefaultAsync(r => r.Id == id);
            return user;
        }


        public async Task<PagedList<User>> GetUsers(UserParams userParams)
        {
           var users =  _context.Users
            .Include(p => p.UserPhotos)
            .Include(r => r.Recipes)
            .Include(r => r.FavRecipes)
            .Where (x => x.Id != userParams.UserId).OrderByDescending(u => u.LastActive).AsQueryable();
            

            if (userParams.Likers)
            {
                var userLikers = await GetUserLikes(userParams.UserId, userParams.Likers);
                users = users.Where(u =>userLikers.Contains(u.Id));
            }

            if (userParams.Likees)
            {
                var userLikees = await GetUserLikes(userParams.UserId, userParams.Likers);
                users = users.Where(u =>userLikees.Contains(u.Id));
            }

            // if (userParams.Favs)
            // {   
            //     var userFavRecipes = await GetUserFavRecipes(userParams.UserId, userParams.Favs);
            //     users = users.Where(u => userFavRecipes.Contains(u.Id));
            //     // users.Select(x=>x.FavRecipes).Where(u => userFavRecipes.Contains(u.RecipeId));
            //     // users = users.Where(u => userFavRecipes.Contains(u.Id));
            //     //źle wyświetla 
            //     // powinno wyświetlić ulubione przepisy a nie ulubionych użytkownikow
            // }
            
            
            if (userParams.MinAge != 18 || userParams.MaxAge != 99)
           {
               var minDateOfBirth = DateTime.Today.AddYears(-userParams.MaxAge - 1);
               var maxDateOfBirth = DateTime.Today.AddYears(-userParams.MinAge);

               users = users.Where(u => u.DateOfBirth >= minDateOfBirth && u.DateOfBirth <= maxDateOfBirth);
           }

            if(!string.IsNullOrEmpty(userParams.OrderBy))
            {
                switch(userParams.OrderBy)
                {
                    case "created":
                        users = users.OrderByDescending(u => u.Created);
                        break;
                        default:
                        users = users.OrderByDescending(u=> u.LastActive);
                        break;
                }
            }

            
            return await PagedList<User>.CreateAsync(users, userParams.PageNumber, userParams.PageSize);
        }

        private async Task <IEnumerable<int>> GetUserLikes (int id, bool likers)
        {
            var user = await _context.Users
            .Include(x => x.Likers)
            .Include(x =>x.Likees)
            .FirstOrDefaultAsync(u=>u.Id == id);

            if (likers)
            {
                return user.Likers.Where(u => u.LikeeId == id).Select(i =>i.LikerId);
            }
            else
            {
                return user.Likees.Where(u => u.LikerId == id).Select(i =>i.LikeeId);
            }

        }



        // private async Task <IEnumerable<int>> GetUserFavRecipes (int id, bool favs)
        // {
        //     var user = await _context.Users
        //     .Include(x => x.FavRecipes)
        //     .FirstOrDefaultAsync(u=>u.Id == id);

        //     if(favs)
        //     {
        //         return user.FavRecipes.Where(u => u.UserId == id).Select(i => i.RecipeId);
        //     }    

        // }



        public async Task<UserPhoto> GetMainPhotoForUser(int userId)
        {
            return await _context.UserPhotos.Where(u => u.UserId == userId)
                .FirstOrDefaultAsync(p => p.IsMain);
        }

        public async Task<UserPhoto> GetPhoto(int id)
        {
            var photo = await _context.UserPhotos.FirstOrDefaultAsync(p => p.Id == id);

            return photo;
        }



        public Task<List<Recipe>> GetUserFavRecipes(int userId)
        {
            //Dla usera o id 1 pobrało mi jakieś dwa przepisy - nie wiem czy to się zgadza czy nie, ale to sprawdzisz samemu najlepiej
            var userFavRecipes = _context.FavouriteRecipes
            .Include(x => x.Recipe)
            .ThenInclude(x=>x.RecipePhotos)
            .Where(x => x.UserId == userId)
            .Select(x => x.Recipe)?.ToListAsync();

            return userFavRecipes;
        }


          public async Task<Like> GetLike(int userId, int recipientId)
        {
            return await _context.Likes.FirstOrDefaultAsync(u => u.LikerId == userId && u.LikeeId == recipientId);
        }



        public async Task<Message> GetMessage(int id)
        {
            return await _context.Messages.FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams)
        {
            var messages = _context.Messages
            .Include(u=>u.Sender).ThenInclude(p=>p.UserPhotos)
            .Include(u=>u.Recipient).ThenInclude(p=>p.UserPhotos)
            .AsQueryable();

            switch (messageParams.MessageContainer)
            {
                case "Inbox":
                    messages = messages.Where(u => u.RecipientId == messageParams.UserId 
                        && u.RecipientDeleted == false);
                    break;
                case "Outbox":
                    messages = messages.Where(u => u.SenderId == messageParams.UserId 
                        && u.SenderDeleted == false);
                    break;
                default:
                    messages = messages.Where(u => u.RecipientId == messageParams.UserId 
                        && u.RecipientDeleted == false && u.IsRead == false);
                    break;
            }

            messages = messages.OrderByDescending(d => d.MessageSent);

            return await PagedList<Message>.CreateAsync(messages, messageParams.PageNumber, messageParams.PageSize);
        }

        public async Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId)
        {
            var messages = await _context.Messages
            .Include(u=>u.Sender).ThenInclude(p=>p.UserPhotos)
            .Include(u=>u.Recipient).ThenInclude(p=>p.UserPhotos)
            .Where(m=>m.RecipientId== userId && m.SenderId == recipientId 
                || m.RecipientId ==recipientId && m.SenderId == userId)
            .OrderByDescending(m=>m.MessageSent)
            .ToListAsync();

            return messages;
        }
    }
        
}