using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Mvc;
using ElatePortal.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using ElatePortal.DAL;
using System.Collections;
using System.Security.Claims;
using ElatePortal.Extensions;
using Microsoft.AspNetCore.Http;
using ElatePortal.Repository;

namespace ElatePortal.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {

        //this feeld will be the injected object

        private IConfiguration _configuration;
        private readonly ProfileContext _proileContext;
        private readonly BlogContext _blogContext;
        private readonly PortalRepository _repositrory;
   

        private List<Claim> Profile { get { return User.Claims.ToList();  } }

        public HomeController(
            IConfiguration Configuration,
            ProfileContext ProfileConext,
            BlogContext BlogContext,
            PortalRepository PortalRepository
            
            )
        {
            //let set the object via constructor
            _configuration = Configuration;
            _proileContext = ProfileConext;
            _blogContext = BlogContext;
            _repositrory = PortalRepository;
     
        }
  
        public IActionResult Index()

        {

            if (User.Identity.IsAuthenticated)
            {
                return Redirect("Portal");
            }               

            return Content("sd");
        }


        [HttpGet]
        [Route("Register")]
        public IActionResult Register()
        {
               
            var email = HttpContext.User?.FindFirst(ClaimTypes.Name)?.Value;
            ViewData["email"] = email;
            ViewData["name"] = this.Profile[3].Value;

            var profile = _proileContext.Profile.SingleOrDefault(x => x.Email.Equals(email));

            return View(profile);
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register( [FromForm] string About ) {

            if (ModelState.IsValid)
            {    

                var email = HttpContext.User?.FindFirst(ClaimTypes.Name)?.Value;
                var profile = _proileContext.Profile.SingleOrDefault(x => x.Email.Equals(email));

                profile.About = About;   
                profile.Name = this.Profile[4].Value;
                //profile.ExternalId = Guid.Parse(this.Profile[7].Value);
                profile.Registered = true;
                profile.CreatedAt = DateTime.Now;
                profile.Level = "Admin";
                profile.InternalId = HttpContext.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                _proileContext.Update(profile);
                await _proileContext.SaveChangesAsync();
            

                return RedirectToAction("Index");
            }

            return View();
        }

        public IActionResult About(string email)

        {

            var domain = _configuration["AzureAd:Domain"];
            //pawel@elate.onmicrosoft.com
            // christian @elate.onmicrosoft.com
            //https://developer.microsoft.com/en-us/graph/graph-explorer#
            //https://msdn.microsoft.com/en-us/library/azure/ad/graph/api/users-operations
            //https://msdn.microsoft.com/en-us/library/azure/ad/graph/howto/azure-ad-graph-api-operations-overview#TenantIdentifier
            // Get users's email.
    

            if (User.Identity.IsAuthenticated)
            {
                // Get users's email.
                email = email ?? User.Identity.Name ?? User.FindFirst("preferred_username").Value;
                ViewData["Email"] = email;

            }

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }


        [AllowAnonymous]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpGet("/api/Profile/")]
        public JsonResult GetProfile()
        {
            var email = HttpContext.User.Identity.Name;

            var profile = this._repositrory.GetCurrentProfile(email);
            return Json(profile);

        }

    }
}
