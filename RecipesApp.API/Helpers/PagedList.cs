using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RecipesApp.API.Helpers
{
    //Klasa generyczna - charakter ogólny
    public class PagedList<T> : List<T>
    {
        public int CurrentPage { get; set; } // Obecna strona
        public int TotalPages { get; set; } // Liczba stron
        public int PageSize { get; set; }  // Rozmiar strony
        public int TotalCount { get; set; } // Liczba na stronie


        public PagedList(List<T> items, int count, int pageNumber, int pageSize)
        {
            TotalCount = count;
            PageSize = pageSize;
            CurrentPage = pageNumber;
            TotalPages = (int)Math.Ceiling(count / (double)pageSize);
            this.AddRange(items);
        }

        public static async Task<PagedList<T>> CreateAsync(IQueryable<T> source, int pageNumber, int pageSize)
        {
            var count = await source.CountAsync();
            var items = await source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
            return new PagedList<T>(items, count, pageNumber, pageSize);
        }
    }
}