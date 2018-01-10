using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ElatePortal.DAL;
using ElatePortal.Migrations.Profile;
using ElatePortal.Modules;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ElatePortal.Models;

namespace ElatePortal.Controllers
{
    public class RegisterController : Controller
    {
        private IModule _ModuleInstance;
        private ProfileContext _proileContext;
        private List<Claim> Profile { get { return User.Claims.ToList(); } }

        public RegisterController(IModule ModuleInstance, ProfileContext ProfileConext)
        {
            _ModuleInstance = ModuleInstance;
          //  _configuration = Configuration;
            this._proileContext = ProfileConext;
        }

        public IActionResult Index(string email, string name)
        {

            {
                var c = this._ModuleInstance.DoWork();

                ViewData["email"] = this.Profile[9].Value;
                ViewData["name"] = this.Profile[4].Value;
                var UserEmail = HttpContext.Session.GetString("Email");
                 var profile = _proileContext.Profile.First(p => p.Email == this.Profile[9].Value);
                // return new ContentResult() { Content = UserEmail };
                return View(profile);
            }
            
        }

        [HttpPost]
        public async Task<IActionResult> Register(Models.Profile profile)
        {

            if (ModelState.IsValid)
            {

                profile.Email = this.Profile[9].Value;
                profile.Name = this.Profile[4].Value;
                profile.Registered = true;
                profile.CreatedAt = DateTime.Now;

                _proileContext.Update(profile);
                await _proileContext.SaveChangesAsync();

                return RedirectToAction("Index");
            }

            return View();
        }
    }
}