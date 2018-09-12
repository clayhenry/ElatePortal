
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using ElatePortal.DAL;
using ElatePortal.Extensions;
using ElatePortal.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting.Internal;

namespace ElatePortal.Modules.Hubs
{
    
    [Route("api/message")]
    public class MessageController : Controller
    {
    private IHubContext<MessageHub> _messageHubContext;
    private readonly PortalRepository _portalreposirory;
        
        public MessageController(IHubContext<MessageHub> messageHubContext, PortalRepository portalreposirory)
        {
            
           
            this._messageHubContext = messageHubContext;
            this._portalreposirory = portalreposirory;
        }
       
        [HttpPost]
        public IActionResult Post([FromBody] Chat message)
        {
            if (ModelState.IsValid)
            {
                var user = HttpContext.User?.FindFirst(ClaimTypes.Name)?.Value;
                var email = "pawel@elate.onmicrosoft.com";
                var id = "PZe22SR7YS7OwIZhrd5pXWUf0dp1lYgmeV8Pk5jAVJA";

                try
                {

                    var ids = new List<string>
                    {
                        "PZe22SR7YS7OwIZhrd5pXWUf0dp1lYgmeV8Pk5jAVJA",
                        "BRMU-Q-kV--0b-JDLwUa7uAaLLFCvYsCq-wylxr4RpM"

                    };

                    _messageHubContext.Clients.Users(ids).SendAsync("send", message.Message);
                    // _messageHubContext.Clients.User(id).SendAsync("send", message.Message);
//                    _messageHubContext.Clients.All.SendAsync("send", message.Message);
                }

                catch (HubException e)
                {

                    return Content("error");
                }
//                _messageHubContext.Clients.User(userId).SendAsync(message.Message);
                //  _messageHubContext.Clients.All.SendAsync("send", message.Message);

            }
            return Ok();
        }

        [HttpGet("users")]
        public JsonResult UserAction()
        {
            var allUsers = _portalreposirory.GetAllUsers();
            return Json(allUsers);

        }
    }
}