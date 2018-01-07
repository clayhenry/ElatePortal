using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ElatePortal.Controllers
{
    public class RegisterController : Controller
    {
        public IActionResult Index(string email, string name)
        {

            {
                ViewData["email"] = email;
                ViewData["name"] = name;
                var UserEmail = HttpContext.Session.GetString("Email");
                // var profile = _proileContext.Profile.First(p => p.Email == this.Profile[9].Value);
                   return new ContentResult() { Content = UserEmail };
                //return View();

            }
        }
    }
}