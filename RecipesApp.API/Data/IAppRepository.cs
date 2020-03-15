using System.Threading.Tasks;

namespace RecipesApp.API.Data
{
    public interface IAppRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
    }
}