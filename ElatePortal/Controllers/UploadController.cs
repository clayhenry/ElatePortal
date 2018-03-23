using Microsoft.AspNetCore.Mvc;

namespace ElatePortal.Controllers
{
    public class UploadController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return
            View();
        }
    }
}