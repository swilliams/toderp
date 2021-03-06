﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ToDerp.Data.Models;
using ToDerp.Data.Services;


namespace ToDerp.Areas.Api.Controllers
{
    public class TodoController : Controller
    {
        private DerpRepository _repo;

        public TodoController()
        {
            _repo = new DerpRepository(); // *very* poor man's IOC
        }
        //
        // GET: /Api/Todo/

        public JsonResult Index()
        {
            var items = _repo.AllItems().OrderBy(i => i.Completed).ThenByDescending(i => i.CreatedAt);
            return Json(items.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Item(TodoItem item)
        {
            _repo.Add(item);
            return Json(item);
        }

        [HttpPut]
        public JsonResult Item(int id, TodoItem item)
        {
            var dbItem = _repo.Single(id);
            dbItem.Completed = item.Completed;
            dbItem.TaskName = item.TaskName;
            if (dbItem.Completed)
                dbItem.CompletedAt = DateTime.Now;
            else 
                dbItem.CompletedAt = null;
            _repo.Save();
            return Json(dbItem);
        }
    }
}
