using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ElatePortal.Modules
{
    public class ModuleController : Controller
    {
        public IActionResult Index()
        {
            return new ContentResult() {Content =" controller module " };
        }
    }
}