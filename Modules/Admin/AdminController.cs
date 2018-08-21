using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ElatePortal.Modules.Admin
{
    [Authorize]
    public class AdminController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return
            View("~/Modules/Admin/Views/Index.cshtml");
        }

    }
}