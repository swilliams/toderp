using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDerp.Data.Models
{
    public class TodoItem
    {
        public TodoItem()
        {
            CreatedAt = DateTime.Now;
        }

        public int TodoItemId { get; set; }
        public string TaskName { get; set; }
        public bool Completed { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? CompletedAt { get; set; }
    }
}
