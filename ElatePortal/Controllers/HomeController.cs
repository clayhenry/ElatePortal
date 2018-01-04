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

namespace ElatePortal.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {

        //this feeld will be the injected object
        private IConfiguration _configuration;
        private readonly ProfileContext _proileContext;

        private List<Claim> Profile { get { return User.Claims.ToList();  } }

        public HomeController( IConfiguration Configuration, ProfileContext ProfileConext)
        {
            //let set the object via constructor
            _configuration = Configuration;
            _proileContext = ProfileConext;
        }

        public IActionResult Index()

        {

            if (User.Identity.IsAuthenticated)
            {

                var currentProfile = _proileContext.Profile.FirstOrDefault(x => x.Email == Profile[9].Value);
                // Get users's email.
                
                if (currentProfile == null)
                {
                   return  RedirectToAction("Register");
                }
      

            }
            return View();
        }


        public IActionResult Register()
        {
            ViewData["email"] = Profile[9].Value;
            ViewData["name"] = Profile[4].Value;

          
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
    }
}
