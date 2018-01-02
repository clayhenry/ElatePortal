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

namespace ElatePortal.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            if (User.Identity.IsAuthenticated)
            {
                //pawel@elate.onmicrosoft.com
               // christian @elate.onmicrosoft.com
               //https://developer.microsoft.com/en-us/graph/graph-explorer#
               //https://msdn.microsoft.com/en-us/library/azure/ad/graph/api/users-operations
               //https://msdn.microsoft.com/en-us/library/azure/ad/graph/howto/azure-ad-graph-api-operations-overview#TenantIdentifier
                // Get users's email.
                                 var email =  User.Identity;
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
