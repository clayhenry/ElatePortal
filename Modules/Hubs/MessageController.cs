
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using ElatePortal.DAL;
using ElatePortal.Extensions;
using ElatePortal.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.OAuth.Claims;
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
                var UserId = this._portalreposirory.GetProfileId(user);
                try
                {
                    if (message.Ids.Count > 0)
                    {
                        //_messageHubContext.Clients.Users(message.Ids).SendAsync("send", message);
                        _messageHubContext.Clients.All.SendAsync("send", message);
                    }
                    else
                    {
                        _messageHubContext.Clients.All.SendAsync("send", message);
                    }
    
                    this._portalreposirory.setChatMesage(new Chat()
                    {

                            Date = message.Date,
                            Message = message.Message,
                            ExternalIds =  string.Join(",", message.Ids),
                            ProfileId = UserId
                    });

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

        [HttpGet("/api/messages")]
        public IActionResult GetMessagesAction()
        {

            var chat = this._portalreposirory.GetAllMessages();
            
            return Ok(chat);

        }

    }
}