using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElatePortal.Models
{
    public class Employee : ViewComponent
    {

        public int MyProperty { get; set; }
        public async Task<IViewComponentResult> InvokeAsync()
        {



            return View();
        }




    }
}
