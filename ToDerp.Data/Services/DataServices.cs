using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDerp.Data.Models;

namespace ToDerp.Data.Services
{
    public class ToDerpContext : DbContext
    {
        public DbSet<TodoItem> TodoItems { get; set; }
    }

    public class DerpRepository : IDisposable
    {
        private ToDerpContext _context;

        public DerpRepository()
        {
            _context = new ToDerpContext();
        }

        public IQueryable<TodoItem> AllItems()
        {
            return _context.TodoItems.AsQueryable();
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Add(TodoItem item)
        {
            _context.TodoItems.Add(item);
            Save();
        }

        public void Dispose()
        {
            if (_context != null)
            {
                _context.Dispose();
            }
        }
    }
}
