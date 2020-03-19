using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RecipesApp.API.Controllers.Models.Data;
using RecipesApp.API.Models;

namespace RecipesApp.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;

        public AuthRepository(DataContext context)
        {
            _context = context;

        }

        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users
            .Include(p=>p.FavRecipes)
            .Include(p => p.UserPhotos).FirstOrDefaultAsync(u => u.Username == username);
            // Zaleta korzystania z FirstOrDefaultAsync = że zwróci albo użytkownika lub null.
            
            if(user == null)
                return null;

            if(!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
              using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
                                                                        // klucz do odszyfrowania
            {
                
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                // Obliczenie 'skrótu' z naszego hasła.
                
                for(int i = 0; i < computedHash.Length; i++)
                {
                    if(computedHash[i] != passwordHash[i]) return false;
                }
            }
            return true;
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            
         
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
            
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                // Metoda ta generuje klucz, oraz miesza hasło.
            }    
        }

        public async Task<bool> UserExists(string username)
        {
            if(await _context.Users.AnyAsync(u => u.Username == username))
            // Chcemy porównać tę nazwę użytkownika z dowolnym innym użytkownikiem w naszej db. Dlatego AnyAsync!
                return true;

            return false;
        }

    }
}