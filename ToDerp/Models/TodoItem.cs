using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDerp.Models
{
    public class TodoItem
    {
        public string TaskName { get; set; }
        public bool Completed { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? CompletedAt { get; set; }
    }
}