using Microsoft.AspNetCore.Mvc;

namespace ElatePortal.Modules.Hubs
{
    public class MessageController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return
            View();
        }
    }
}